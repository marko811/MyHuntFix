//
//  NetworkHelper.m
//  Example
//
//  Created by HackOS on 19/04/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "NetworkHelper.h"
#import "AFHTTPSessionManager.h"
#import "AFNetworking.h"
#import "AFURLRequestSerialization.h"

@implementation NetworkHelper
RCT_EXPORT_MODULE();

+ (id)sharedManager {
    static NetworkHelper *shared = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        shared = [[self alloc] init];
    });
    return shared;
}

RCT_EXPORT_METHOD(requestAPIByURL:(NSString *)url method:(NSString *)method Params:(NSDictionary *)params Success:(RCTResponseSenderBlock)success Error:(RCTResponseErrorBlock)fail)
{
  
  AFHTTPSessionManager *manager = [[AFHTTPSessionManager alloc]initWithSessionConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration]];
  manager.requestSerializer = [AFJSONRequestSerializer serializer];
  [manager.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
  manager.responseSerializer.acceptableContentTypes = nil;
    AFSecurityPolicy *securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeNone];
    securityPolicy.allowInvalidCertificates = YES;
    securityPolicy.validatesDomainName = false;
    manager.securityPolicy = securityPolicy;
  if ([@"post" isEqualToString:[method lowercaseString]]) {
    
    [manager POST:url parameters:params progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
      NSDictionary *responseData;
      if(responseObject){
        responseData = @{@"statusCode":[NSNumber numberWithInteger:200],@"body":responseObject};
      }else{
        responseData = @{@"statusCode":[NSNumber numberWithInteger:200],@"body":@""};
      }
      success(@[responseData]);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
      
      NSHTTPURLResponse *response = (NSHTTPURLResponse *)task.response;
      NSInteger statusCode = response.statusCode;
      
      NSData *data = [error.userInfo objectForKey:AFNetworkingOperationFailingURLResponseDataErrorKey];
      NSError *parseError;
      NSDictionary *dictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
      if (parseError || !dictionary) {
        dictionary = [NSDictionary new];
      }
      
      NSDictionary *responseData = @{@"statusCode":[NSNumber numberWithInteger:statusCode],@"body":dictionary};
      success(@[responseData]);
    }];
    
  }else if ([@"get" isEqualToString:[method lowercaseString]]) {
    
    [manager GET:url parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
      NSDictionary *responseData;
      if(responseObject){
        responseData = @{@"statusCode":[NSNumber numberWithInteger:200],@"body":responseObject};
      }else{
        responseData = @{@"statusCode":[NSNumber numberWithInteger:200],@"body":@""};
      }
      success(@[responseData]);
      
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
      NSHTTPURLResponse *response = (NSHTTPURLResponse *)task.response;
      NSInteger statusCode = response.statusCode;
      
      NSData *data = [error.userInfo objectForKey:AFNetworkingOperationFailingURLResponseDataErrorKey];
      NSError *parseError;
      NSDictionary *dictionary = [NSJSONSerialization JSONObjectWithData:data options:0 error:&parseError];
      if (parseError || !dictionary) {
        dictionary = [NSDictionary new];
      }
      
      NSDictionary *responseData = @{@"statusCode":[NSNumber numberWithInteger:statusCode],@"body":dictionary};
      success(@[responseData]);
    }];
    
  }
}

@end
