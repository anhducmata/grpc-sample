import grpc
import user_pb2
import user_pb2_grpc

def run():
    # Connect to the gRPC server
    with grpc.insecure_channel('localhost:50051') as channel:
        # Create a stub for the UserService
        stub = user_pb2_grpc.UserServiceStub(channel)

        # Create a GetUserByIdRequest with the ID of the user to fetch
        get_user_request = user_pb2.GetUserByIdRequest()
        get_user_request.id = "123"

        # Call the GetUserById method on the server with the request
        user = stub.GetUserById(get_user_request)

        # Print the response from the server
        print("User with ID", get_user_request.id, ":", user)

if __name__ == '__main__':
    run()
