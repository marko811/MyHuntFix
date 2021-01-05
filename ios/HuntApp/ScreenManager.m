//
//  ScreenManager.m
//  HuntApp
//
//  Created by Nguyen Truong on 10/25/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "ScreenManager.h"

@implementation ScreenManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(changeOrientation)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([UIDevice currentDevice].orientation == UIDeviceOrientationLandscapeLeft || [UIDevice currentDevice].orientation == UIDeviceOrientationLandscapeRight){
      [[UIDevice currentDevice] setValue:[NSNumber numberWithInteger: UIInterfaceOrientationPortrait] forKey:@"orientation"];
    }else{
      [[UIDevice currentDevice] setValue:[NSNumber numberWithInteger: UIInterfaceOrientationLandscapeRight] forKey:@"orientation"];
    }
  });
  
}
@end
