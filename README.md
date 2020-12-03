# aws-image-analyzer-rekognition

Sample serverless application to play with:
- Serverless framework
- Lambda function
- [Amazon Rekognition](https://aws.amazon.com/pt/rekognition/)
- [Amazon Translate](https://aws.amazon.com/pt/translate/)

# Useful commands

## Deploy
```
sls deploy
```
## Call function
```
https://<URL>.<REGION>.amazonaws.com/dev/analyze?imageUrl=<URL>
```

Example: https://09x2ygr9e1.execute-api.us-east-1.amazonaws.com/dev/analyze?imageUrl=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV3ES5RW0SGjU9VyOYwJCIRBfZUdKCTyKkg&usqp=CAU

output:
> 99.99% de chance de ser Luz solar   
 98.16% de chance de ser Natureza   
 96.61% de chance de ser Ao ar livre   
 96.36% de chance de ser Cenário   
 91.70% de chance de ser Planta   
 91.70% de chance de ser Vegetação   
 84.56% de chance de ser Terrenos  