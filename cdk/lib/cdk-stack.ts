 import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Function, Runtime, Code,InvokeMode,FunctionUrlAuthType,Architecture } from 'aws-cdk-lib/aws-lambda';
//import * as s3 from '@aws-cdk/aws-s3';
//import * as cdk from '@aws-cdk/core';
//import * as lambda from '@aws-cdk/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as path from "path";
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as iam from "aws-cdk-lib/aws-iam";
import { VirginiaStack, VirginiaStackProps } from './virginia-stack';

export class CdkStack extends cdk.Stack {
  
  // protected staticAssetBucket: s3.IBucket;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


  // Create a new S3 bucket to store Next.js build artifacts
  const myBucket = new s3.Bucket(this, 'NewHCIBucket', {
    bucketName: 'new-hci-bucket', // Replace with your desired name
    enforceSSL : true,
    versioned : true,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    encryption : s3.BucketEncryption.S3_MANAGED,
    removalPolicy: cdk.RemovalPolicy.DESTROY // Optional: Set removal policy
  });

  cdk.Tags.of(myBucket).add('Env', 'POC');
  cdk.Tags.of(myBucket).add('Team', 'HCINT');

  // Upload files to the S3 bucket
  new s3deploy.BucketDeployment(this, 'DeployNextjsAssets', {
    sources: [s3deploy.Source.asset('../dist/.open-next/assets')],
    destinationBucket: myBucket,
  });

  //.grantRead(new iam.AccountRootPrincipal());

  // Create an Origin Access Identity
  const oac = new cloudfront.CfnOriginAccessControl(this, `pocNewHciOriginAccessControl`, {
    originAccessControlConfig: {
      name: `pocNewHciNextJsOAC`,
      originAccessControlOriginType: "s3",
      signingBehavior: "always",
      signingProtocol: "sigv4",
    },
  });

    //Create Lambda function
    const nextjsLambda = new Function(this, 'NextjsLambda', {
      functionName : "poc_new_hci_lambda_2",
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset('../dist/.open-next/server-function'), // Directory containing your Next.js application code
      handler:'index.handler',
      timeout: cdk.Duration.seconds(30), // Adjust as needed
      memorySize: 1024, // Adjust as needed
      environment: {
        NEXT_PUBLIC_S3_BUCKET: myBucket.bucketName, // Make S3 bucket name accessible in Lambda
      },
      architecture : Architecture.ARM_64
  });

  cdk.Tags.of(nextjsLambda).add('Env', 'POC');
  cdk.Tags.of(nextjsLambda).add('Team', 'HCINT');



  const poc_new_hci_lambda_2_log = new logs.LogGroup(this, 'poc_nextjs_HCI_lambda_1_log', {
    logGroupName : "/aws/lambda/poc_new_hci_lambda_2",
    retention : logs.RetentionDays.FIVE_DAYS,
    removalPolicy : cdk.RemovalPolicy.DESTROY
  });
  // Add tags to the log group
  cdk.Tags.of(poc_new_hci_lambda_2_log).add('Env', 'POC');
  cdk.Tags.of(poc_new_hci_lambda_2_log).add('Team', 'HCINT');

  const poc_nextjs_image_policy =  new iam.Policy(this, "hci-image-policy", {
    policyName: "poc_nextjs_image_policy",
    statements: [
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [myBucket.arnForObjects("*")],
      })
    ],
  }
)


const lambdaRole = new iam.Role(this, 'poc_nextjs_image_lambda_role', {
 
  assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
  roleName: 'poc_nextjs_image_lambda_role',
  description: 'Role for Lambda function',
  managedPolicies: [
    iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
  ],
});
lambdaRole.attachInlinePolicy(poc_nextjs_image_policy)

   //Create Lambda function for image-optimization
   const nextjsimageLambda = new Function(this, 'NextjsImageLambda', {
    functionName : "poc_new_hci_image_lambda_2",
    runtime: Runtime.NODEJS_20_X,
    code: Code.fromAsset('../dist/.open-next/image-optimization-function'), // Directory containing your Next.js application code
    handler:'index.handler',
    timeout: cdk.Duration.seconds(30), // Adjust as needed
    memorySize: 1024, // Adjust as needed
    environment: {
      BUCKET_NAME: myBucket.bucketName, // Make S3 bucket name accessible in Lambda
      BUCKET_KEY_PREFIX: '_assets'
    },
    architecture : Architecture.ARM_64,
    role: lambdaRole
});

cdk.Tags.of(nextjsimageLambda).add('Env', 'POC');
cdk.Tags.of(nextjsimageLambda).add('Team', 'HCINT');

const poc_new_hci_lambda_3_log = new logs.LogGroup(this, 'poc_nextjs_HCI_lambda_3_log', {
  logGroupName : "/aws/lambda/poc_new_hci_image_lambda_2",
  retention : logs.RetentionDays.FIVE_DAYS,
  removalPolicy : cdk.RemovalPolicy.DESTROY
});
// Add tags to the log group
cdk.Tags.of(poc_new_hci_lambda_3_log ).add('Env', 'POC');
cdk.Tags.of(poc_new_hci_lambda_3_log ).add('Team', 'HCINT');

  

  const nextjsLambdaUrl = nextjsLambda.addFunctionUrl({
    authType :  FunctionUrlAuthType.NONE,
    invokeMode : InvokeMode.BUFFERED
  });

  const nextjsImageLambdaUrl = nextjsimageLambda.addFunctionUrl({
    authType :  FunctionUrlAuthType.NONE,
    invokeMode : InvokeMode.BUFFERED
  });

// // Create a CloudFront function
// const cloudfrontFunction = new cloudfront.Function(this, 'CloudFrontFunction', {
//   functionName: "poc_hci_viewer_request_function",
//   runtime: cloudfront.FunctionRuntime.JS_2_0,
//   code: cloudfront.FunctionCode.fromFile({
//     filePath: '../.open-next/server-function/index.mjs'
//   })
// });


// const existingCertificate = acm.Certificate. fromCertificateArn(this,
//   'api.spsandbox.dev.idp.com',
//   'arn:aws:acm:us-east-1:354531501684:certificate/71d7c056-ad34-4fec-813d-fee1ddf09bc9');

const existingCertificate = acm.Certificate. fromCertificateArn(this,
  'dev.hci.hotcoursesabroad.com',
  'arn:aws:acm:us-east-1:527801330826:certificate/a85658b9-202c-4649-9cc3-2033061795a5');
 
  const s3Origin = new origins.S3Origin(myBucket,{
    originId: "S3-Assests-Bucket-Origin"
  });
  
  const serverLambdaBehavior : cloudfront.BehaviorOptions = {
    origin: new origins.FunctionUrlOrigin(nextjsLambdaUrl,{
      originId: "Server-Lambda-Url-Origin"
    }),
    
      compress: true,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
    //   functionAssociations: [
    //   {
    //     eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
    //     function: cloudfrontFunction
    //   }
    // ]
  }

  

  const serverImageLambdaBehavior : cloudfront.BehaviorOptions = {
    origin: new origins.FunctionUrlOrigin(nextjsImageLambdaUrl,{
      originId: "Server-Lambda-Image-Url-Origin"
    }),
    
      compress: true,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
    //   functionAssociations: [
    //   {
    //     eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
    //     function: cloudfrontFunction
    //   }
    // ]
  }
  
  // requests going to remote entry
 const remoteEntryBehavior: cloudfront.BehaviorOptions = {
  viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  origin: s3Origin,
  allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
  cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
  compress: true
};

// requests going to s3
const staticBehavior: cloudfront.BehaviorOptions = {
  viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  origin: s3Origin,
  allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
  cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
  compress: true
};

// Create a CloudFront distribution
const distribution = new cloudfront.Distribution(this, 'CloudFrontDistribution', {
  defaultBehavior: serverLambdaBehavior,
  additionalBehaviors: {
    "api/*": serverLambdaBehavior,
    "_next/image*":serverImageLambdaBehavior,
    // known static routes
    "_next/static/ssr/remoteEntry.js": remoteEntryBehavior,
    "_next/static/chunks/remoteEntry.js": remoteEntryBehavior,
    "_next/static/*": staticBehavior,
    "affiliate-styles/*": staticBehavior,
    "icons/*": staticBehavior,
    "images/*": staticBehavior,
    "fonts/*": staticBehavior,
    "assets/*": staticBehavior,
    "locales/*": staticBehavior,
    "favicon.ico": staticBehavior
   
    // "css/*": cssBucketBehavior,
    // "*.xml": siteMapBehavior,
    // "*.txt": siteMapBehavior,
  },

  enableIpv6: false,
  domainNames: ['dev.hci.hotcoursesabroad.com'], // Replace with your domain name
  certificate: existingCertificate,
  enabled: true,
  httpVersion: cloudfront.HttpVersion.HTTP2,
  priceClass: cloudfront.PriceClass.PRICE_CLASS_100
});

// Add tags to the log group
cdk.Tags.of(distribution).add('Env', 'POC');
cdk.Tags.of(distribution).add('Team', 'HCINT');


const policyStatement = new iam.PolicyStatement({
  actions: ["s3:GetObject"],
  resources: [myBucket.arnForObjects("*")],
})
 
// // Create a CloudFront distribution
// const distribution = new cloudfront.Distribution(this, 'CloudFrontDistribution', {
//   defaultBehavior: {
//     origin: new origins.FunctionUrlOrigin(nextjsLambdaUrl),
//     viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
//   //   functionAssociations: [
//   //   {
//   //     eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
//   //     function: cloudfrontFunction
//   //   }
//   // ]
//   },
//   domainNames: ['api.spsandbox.dev.idp.com'], // Replace with your domain name
//   certificate: existingCertificate,
//   enabled: true,
//   httpVersion: cloudfront.HttpVersion.HTTP2,
//   priceClass: cloudfront.PriceClass.PRICE_CLASS_100
// });

const cfnDistribution = distribution.node
      .defaultChild as cloudfront.CfnDistribution;

    // "2" is hardcoded until issue is resolved: https://github.com/aws/aws-cdk-rfcs/issues/491
    // 0 - server lambda (default)
    // 1 - image lambda // not added
    // 2 - static assets
    // 3 - static CSS assets
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.2.OriginAccessControlId",
      oac.getAtt("Id")
    );
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.2.S3OriginConfig.OriginAccessIdentity",
      ""
    );

    const allowCloudFrontReadOnlyPolicy = new iam.PolicyStatement({
      actions: ["s3:GetObject"],
      principals: [new iam.ServicePrincipal("cloudfront.amazonaws.com")],
      effect: iam.Effect.ALLOW,
      conditions: {
        StringEquals: {
          "AWS:SourceArn": `arn:aws:cloudfront::${
            cdk.Stack.of(this).account
          }:distribution/${distribution.distributionId}`,
        },
      },
      resources: [`${myBucket.bucketArn}/*`],
    });
    myBucket.addToResourcePolicy(allowCloudFrontReadOnlyPolicy);

    
    // const cloudfrontFunction_log = new logs.LogGroup(this, 'cloudfrontFunction_log', {
    //   logGroupName : "/aws/cloudfront/function/"+cloudfrontFunction.functionName,
    //   retention : logs.RetentionDays.FIVE_DAYS,
    //   removalPolicy : cdk.RemovalPolicy.DESTROY,
    // });
    // // Add tags to the log group
    // cdk.Tags.of(cloudfrontFunction_log).add('Env', 'POC');
    // cdk.Tags.of(cloudfrontFunction_log).add('Team', 'HCINT');

// // const existingHostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'ExistingHostedZone', {
// //   hostedZoneId: 'Z09155552PTHY28B9XI5O', // Replace with your hosted zone ID
// //   zoneName: 'spsandbox.dev.idp.com', // Replace with your domain name
// // });


// // // Create an A record
// // const aRecord = new route53.ARecord(this, 'ARecord', {
// //   zone: existingHostedZone,
// //   recordName: 'api.spsandbox.dev.idp.com', // Replace with your desired record name
// //  // target: route53.RecordTarget.fromValues(distribution.domainName), // Replace with your desired IP addresses
// //  target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
// //   ttl: cdk.Duration.minutes(5), // Optional: Set the Time-to-Live (TTL) value
// // });

// // const virginiaStackProps: VirginiaStackProps =  {
// //   logGroupName : "/aws/cloudfront/function/newhci",
// //   stackName: 'pocNewHCIVirginiaStack',
// //   env: { region: 'us-east-1', account: cdk.Stack.of(this).account },
// // };
// // const virginiaStack = new VirginiaStack(this, 'virginiaStack', virginiaStackProps);


  //myBucket.grantRead(nextjsLambda);

  // const nextjsimageLambdaUrl = nextjsLambda.addFunctionUrl({
  //   authType :  FunctionUrlAuthType.NONE,
  //   invokeMode : InvokeMode.BUFFERED
  // });

  // // new cdk.CfnOutput(this, "LambdaFn-url", {
  // //   value: nextjsLambdaUrl.url,
  // // });

  // //  // Output the CloudFront distribution domain name
  // //  new cdk.CfnOutput(this, 'DistributionDomain', {
  // //   value: distribution.distributionDomainName,
  // // });



  }
}

// const app = new cdk.App();
// new CdkStack(app, 'MyNewStack');