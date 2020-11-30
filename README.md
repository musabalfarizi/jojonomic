

[![N|Solid](https://www.jojonomic.com/wp-content/uploads/2020/05/logo-jojonomic-with-ISO@2x-1.png)](https://jojonomic.com)

# Coding Test Jojonomic

Create all endpoint bellow:

## Endpoints

### Root List

```
GET http://api-gateway.co.id/document-service
```
Response:
```
{
    "error": false,
    "data": [
         {
             "id": "82b07a6f-60cc-4403-8fd2-329ef0de0d3d",
             "name": "Folder Tech",
             "type": "folder",
             "is_public": true,
             "owner_id": 1231,
             "share": [123,232,4333],
             "timestamp": 16576232323
         },
         {
             "id": "82b07a6f-60cc-4403-8fd2-329ef0de045d",
             "name": "Folder hrd",
             "type": "folder",
             "is_public": true,
             "owner_id": 1231,
             "share": [123,232,4333],
             "timestamp": 16576232323
         },
        {
             "id": "82b07a6f-60cc-4403-8fd2-329ef0de045d",
             "name": "Document Job desc Tech",
             "type": "document",
             "owner_id": 1231,
             "share": [123,232,4333],
             "timestamp": 16576232323
         }
    ]
}
```
