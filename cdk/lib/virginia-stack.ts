import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface VirginiaStackProps extends cdk.StackProps{
    logGroupName: string;
    stackName: string;
    env: {region: string, 
        account: string
    };
}

export class VirginiaStack extends cdk.Stack {
  public readonly logGroup: logs.ILogGroup;

  constructor(scope: Construct, id: string, props: VirginiaStackProps) {
      super(scope, id,props);

    // Validate input parameters
    if (!props.logGroupName) {
        throw new Error('Log group name is required');
    }

    this.logGroup = new logs.LogGroup(this, 'LogGroup', {
      logGroupName: props.logGroupName,
      retention: logs.RetentionDays.FIVE_DAYS,
    });
    cdk.Tags.of(this.logGroup).add('Env', 'POC');
    cdk.Tags.of(this.logGroup).add('Team', 'HCINT');

  }
}