
import grpc
import user_pb2
import user_pb2_grpc

def Create(id, name):
    # Connect to the gRPC server
    with grpc.insecure_channel('localhost:50051') as channel:
        # Create a stub for the UserService
        stub = user_pb2_grpc.UserServiceStub(channel)

        # Create a new User object
        user = user_pb2.User()
        user.id = id
        user.name = name

        # Create a CreateUserRequest with the user object
        create_user_request = user_pb2.CreateUserRequest()
        create_user_request.user.CopyFrom(user)

        # Call the CreateUser method on the server with the request
        created_user = stub.CreateUser(create_user_request)

        # Print the response from the server
        print("Created user:", created_user)

        return created_user

def search(user_id):
    # Connect to the gRPC server
    with grpc.insecure_channel('localhost:50051') as channel:
        # Create a stub for the UserService
        stub = user_pb2_grpc.UserServiceStub(channel)

        # Create a CreateUserRequest with the user object
        user_searched_req = user_pb2.GetUserByIdRequest()
        user_searched_req.id = user_id

        # Call the CreateUser method on the server with the request
        user_searched = stub.GetUserById(user_searched_req)

        # Print the response from the server
        print("Founded user:", user_searched)

        return user_searched

if __name__ == '__main__':
    print("Create user:")
    print("Input name:")
    name = input()
    print("Input id:")
    id = input()
    Create(id, name)
    print("Insert the user id to search:")
    x = input()
    print(search(x))

