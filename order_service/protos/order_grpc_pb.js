// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_order_pb = require('../protos/order_pb.js');

function serialize_order_Empty(arg) {
  if (!(arg instanceof protos_order_pb.Empty)) {
    throw new Error('Expected argument of type order.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_Empty(buffer_arg) {
  return protos_order_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderList(arg) {
  if (!(arg instanceof protos_order_pb.OrderList)) {
    throw new Error('Expected argument of type order.OrderList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderList(buffer_arg) {
  return protos_order_pb.OrderList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderRequest(arg) {
  if (!(arg instanceof protos_order_pb.OrderRequest)) {
    throw new Error('Expected argument of type order.OrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderRequest(buffer_arg) {
  return protos_order_pb.OrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_OrderResponse(arg) {
  if (!(arg instanceof protos_order_pb.OrderResponse)) {
    throw new Error('Expected argument of type order.OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_OrderResponse(buffer_arg) {
  return protos_order_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  createOrder: {
    path: '/order.OrderService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: protos_order_pb.OrderRequest,
    responseType: protos_order_pb.OrderResponse,
    requestSerialize: serialize_order_OrderRequest,
    requestDeserialize: deserialize_order_OrderRequest,
    responseSerialize: serialize_order_OrderResponse,
    responseDeserialize: deserialize_order_OrderResponse,
  },
  getOrders: {
    path: '/order.OrderService/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: protos_order_pb.Empty,
    responseType: protos_order_pb.OrderList,
    requestSerialize: serialize_order_Empty,
    requestDeserialize: deserialize_order_Empty,
    responseSerialize: serialize_order_OrderList,
    responseDeserialize: deserialize_order_OrderList,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
