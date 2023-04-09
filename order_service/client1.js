const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the protobuf definition
const packageDefinition = protoLoader.loadSync(
  '../user-service/protos/user.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

// Load the proto files
const proto = grpc.loadPackageDefinition(packageDefinition);

// Connect to the gRPC server
const client = new proto.mypackage.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

function create(id, name) {
  // Create a new User object
  const user = {
    id: id,
    name: name,
  };

  // Create a CreateUserRequest with the user object
  const create_user_request = {
    user: user,
  };

  // Call the CreateUser method on the server with the request
  client.createUser(create_user_request, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // Print the response from the server
    console.log('Created user:', response);
    return response;
  });
}

function search(user_id) {
  // Create a GetUserByIdRequest with the user ID
  const user_searched_req = {
    id: user_id,
  };

  // Call the GetUserById method on the server with the request
  client.getUserById(user_searched_req, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    // Print the response from the server
    console.log('Founded user:', response);
    return response;
  });
}

async function test() {
  // const user = await create('2', '');
  // console.log(user);
  const userById = await search('123');
  console.log(userById);
}

test();
