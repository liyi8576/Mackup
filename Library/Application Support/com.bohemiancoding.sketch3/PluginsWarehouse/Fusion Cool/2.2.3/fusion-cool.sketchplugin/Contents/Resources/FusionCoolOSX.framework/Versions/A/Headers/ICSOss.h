//
//  ICSOss.h
//  FusionCoolOSX
//
//  Created by jianyi.zh on 2019/5/7.
//  Copyright © 2019 alibaba.bpxt All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AliyunOSSOSX/AliyunOSSiOS.h"
#import "ICSHttp.h"
#import "ICSLog.h"

@interface ICSOss : NSObject

+(instancetype)sharedInstance;
- (BOOL) createClient:(NSDictionary *)config;
- (OSSFederationToken *)createToken:(id) json;
- (NSString *) getFileSignURL:(NSDictionary *)config;
- (NSString *)uploadFile:(NSDictionary *)config;

@end
