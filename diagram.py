from diagrams import Diagram
from diagrams.onprem.vcs import Github
from diagrams.aws.devtools import Codepipeline, Codebuild, Codedeploy
from diagrams.aws.storage import S3
from diagrams.aws.network import CF, Route53, APIGateway
from diagrams.aws.compute import Lambda
from diagrams.aws.engagement import SES
from diagrams.aws.database import DDB
from diagrams.programming.framework import React

with Diagram("Static Site Infra Design", show=False):
    
    cb = Codebuild("Build Next.js App")
    s3 = S3("Portfolio Bucket")
    cp = Codepipeline("When Master Branch Change")
    cf = CF("Cloudfront")
    rt = Route53("Route53")
    ld = Lambda("Send Email")
    ag = APIGateway("API Gateway")
    ml = SES("Email")
    db = DDB("Contacts")
    ra = React("Static Site")
    
    Github("") >> cp
    
    cp >> cb >> Codedeploy("Deploy out folder to S3") >> s3
    rt >> cf >> s3
    rt >> ag >> ld
    ld >> ml
    ld >> db
    ra >> ag
    s3 >> ra
    
