terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "<= 3.42.0"
    }
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "static_react_bucket" {
  bucket = "react-blockchain-app"
  acl    = "private"

  tags = {
    Name = "react-blockchain-app"
  }

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.static_react_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}