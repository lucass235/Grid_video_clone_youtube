import json
import boto3
import err.custom_err as err


# Cria uma conexão com o serviço DynamoDB
dynamodb = boto3.resource('dynamodb')
            
# Cria um objeto do tipo tabela do DynamoDB
table = dynamodb.Table('videos')

def get_data():
    
    # Cria uma conexão com o serviço DynamoDB
    dynamodb_get = boto3.client('dynamodb')
            
    # recupera todos os itens da tabela
    response = dynamodb_get.scan(TableName='videos')
        
    # lista vazia para armazenar os itens
    items = []
    
    # adiciona cada item à lista
    for item in response['Items']:
        items.append(item)   
        
    return items
    
    
def post_item(payload):
    
    response = table.get_item(Key={'id': payload['id']})
    
    if 'Item' in response:
        raise err.ConflictErr(f"id {payload['id']} is already registered!")
        
    # Define os valores do item que será inserido
    item = {
        'id': payload['id'],
        'title': payload['title'],
        'userCreator': payload['userCreator'],
        'description': payload['description'],
        'thumbnail': payload['thumbnail'],
        'videoUrl': payload['videoUrl'],
        'durationVideo': payload['durationVideo'],
        'viewsVideo': payload['viewsVideo']
        }
        
    # Convertendo 'viewsVideo' e 'durationVideo' para inteiros
    item['viewsVideo'] = int(item['viewsVideo'])
    item['durationVideo'] = int(item['durationVideo'])    
            
    # adiciona o item à tabela
    table.put_item(Item=item)
    
    return "Video added!"
    
def update_item(id_video, data):
    
    #verificar id
    if not id_video:
        raise err.RequiredErr("Id Requered!")
    
    # Verificação se id existe no banco
    response = table.get_item(Key={'id': id_video})
    
    if 'Item' not in response:
        # O item existe na tabela
        raise err.NotFoundErr(f"id {id_video} is not registered!")
    
    # Novos valores para atualizar
    expression_attribute_values = {
        ':title': data['title'], 
        ':userCreator': data['userCreator'], 
        ':description': data['description'], 
        ':thumbnail': data['thumbnail'], 
        ':videoUrl': data['videoUrl'],
        ':durationVideo': data['durationVideo'],
        ':viewsVideo': data['viewsVideo']
    }

    # Adicione a expressão de atualização para atualizar os valores dos atributos
    update_expression = 'SET title = :title, userCreator = :userCreator, description = :description, thumbnail = :thumbnail, videoUrl = :videoUrl, durationVideo = :durationVideo, viewsVideo = :viewsVideo'

    # Atualize o item na tabela
    table.update_item(
        Key={'id': id_video},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return 'Video updated'
    
def delete_user(id_video):
    
    # Verificação se id existe no banco
    response = table.get_item(Key={'id': id_video})
    
    if 'Item' not in response:
        # O item existe na tabela
        raise err.NotFoundErr(f"id {id_video} is not registered!")
    
    table.delete_item(
        Key={
            'id': id_video
        }
    )
    
    return 'Video deleted!'
    
    