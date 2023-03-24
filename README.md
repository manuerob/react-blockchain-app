# react-blockchain-app


## Step 1 : Gitlab

- Created Gitlab repository
- Added rules to the main branch to disable push (only merge requests)

## Step 2 : AWS account

- Create AWS account
- Install AWS CLI tool and connect to account

## Step 3 : Terraform
- Install terraform
- Terraform S3 bucket, Gitlab user, Cloudfront distribution

## Step 4 : Gitlab pipeline
- Configure .gitlab-ci.yml to deploy changes on react app when merged with main branch
- Ideally terraform gitlab runners

## Step 5 : Create an emergency script that does all the steps above
