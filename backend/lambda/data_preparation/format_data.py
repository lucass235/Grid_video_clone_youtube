import json


def data_formated(lista_json):
    
    novo_lista_json = []
    
    for json_dict in lista_json:
        id = json_dict["id"]["S"]
        title = json_dict["title"]["S"]
        userCreator = json_dict["userCreator"]["S"]
        description = json_dict["description"]["S"]
        thumbnail = json_dict["thumbnail"]["S"]
        videoUrl = json_dict["videoUrl"]["S"]
        durationVideo = json_dict["durationVideo"]["N"]
        viewsVideo = json_dict["viewsVideo"]["N"]
        novo_json_dict = {
            "id": id,
            "title": title,
            "userCreator": userCreator,
            "description": description,
            "thumbnail": thumbnail,
            "videoUrl": videoUrl,
            "durationVideo": durationVideo,
            "viewsVideo": viewsVideo
        }
        novo_lista_json.append(novo_json_dict)
        
    return novo_lista_json
