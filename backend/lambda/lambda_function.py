import json
import boto3
from json import dumps
import dynamo.dynamoDB as dynamo
import err.custom_err as custom_err
import data_preparation.format_data as format

def lambda_handler(event, context):
    
    try:
        
        # Verificações das solicitações  
        if event['httpMethod'] == 'POST':
            print(event['body'])
            
            # Decodifica o corpo da solicitação HTTP em um objeto Python
            payload = json.loads(event['body'])
            
            # # validate.validate_data(payload)
            
            result = dynamo.post_item(payload)
            
            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }  
            
        elif event['httpMethod'] == 'PUT':
            
            # # Extrai o valor do parâmetro 'userName'
            id_video = event['queryStringParameters']['id']
            
            # if not validate.validate_cpf(id_user):
            #     raise custom_err.BadRequestErr(f'CPF {id_user} invalid!')
            
            data = json.loads(event['body'])
            
            result = dynamo.update_item(id_video, data)
            
            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }
            
        elif event['httpMethod'] == 'DELETE':
            
            id_video = event['queryStringParameters']['id']
            
            # if not validate.validate_cpf(id_user):
            #     raise custom_err.BadRequestErr(f'CPF {id_user} invalid!')
            
            result = dynamo.delete_user(id_video)
            
            return {
                'statusCode': 200,
                'body': json.dumps(result)
            }
        
        print(dynamo.get_data())
        # Caso de a solicitação ser GET
        data_format = format.data_formated(dynamo.get_data())
        
        return {
            'statusCode': 200,
            'body': json.dumps(data_format)
        }
        
    except custom_err.RequiredErr as err:
        return {
            'statusCode': 407,
            'body': dumps(F'{err}')
        }     
        
    except custom_err.ConflictErr as err:
        return {
            'statusCode': 409,
            'body': json.dumps(f'{err}')
        }
        
    except custom_err.NotFoundErr as err:
        return {
            'statusCode': 404,
            'body': json.dumps(f'{err}')
        }
        
    except custom_err.BadRequestErr as err:
        return {
            'statusCode': 400,
            'body': json.dumps(f'{err}')
        }    
        
    except Exception as err:
        return {
            'statusCode': 505,
            'body': json.dumps(f'{err}')
        }
        
