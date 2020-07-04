//
//  ICSAuth.h
//  FusionCoolOSX
//
//  Created by jianyi.zh on 2019/5/7.
//  Copyright © 2019 alibaba.bpxt All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CommonCrypto/CommonHMAC.h>
#import <CommonCrypto/CommonDigest.h>
#import "ICSLog.h"

@interface ICSAuth : NSObject

+(instancetype)sharedInstance;
- (NSString *)getIcsParam:(NSMutableDictionary* )body key:(NSString *)key;
- (NSString *)getMaterialParam:(NSString *)input;

@end
