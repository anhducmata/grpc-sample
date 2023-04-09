from concurrent import futures
import grpc
import user_pb2
import user_pb2_grpc

class UserService(user_pb2_grpc.UserServiceServicer):
    def CreateUser(self, request, context):
        user = request.user
        created_user = user_pb2.User()
        created_user.id = user.id
        created_user.name = user.name
        return created_user

    def GetUserById(self, request, context):
        id = request.id
        existing_user = user_pb2.User()
        existing_user.id = id
        print("gRPC server listening on port 50051")
        print(existing_user)
        if id == "123":
            existing_user.name = "Duc"
            return existing_user
        else:
            existing_user.name = "Notfound"
            return existing_user

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("gRPC server listening on port 50051")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
