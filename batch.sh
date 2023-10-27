#!/bin/bash

url="http://crawling-ALB-37796986.ap-northeast-2.elb.amazonaws.com"

for i in {1..5}; do
  echo "Sending request $i to: $url"
  curl -o "response_$i.txt" "$url"
done

echo "All requests completed"
