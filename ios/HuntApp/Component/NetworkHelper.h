//
//  NetworkHelper.h
//  Example
//
//  Created by HackOS on 19/04/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface NetworkHelper : NSObject <RCTBridgeModule>
+ (id)sharedManager;

@end
