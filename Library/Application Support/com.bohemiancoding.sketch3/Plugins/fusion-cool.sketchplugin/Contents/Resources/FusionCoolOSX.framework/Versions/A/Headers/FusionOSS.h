//
//  FusionOSS.h
//  FusionCoolOSX
//
//  Created by zoborzhang on 2019/3/14.
//  Copyright © 2019 intl.ued. All rights reserved.
//

#ifndef FusionOSS_h
#define FusionOSS_h


#import <Foundation/Foundation.h>
#import "AliyunOSSOSX/AliyunOSSiOS.h"
#import "FusionHTTP.h"

@interface FusionOSS : NSObject

- (BOOL) createClient:(NSDictionary *)config;
- (OSSFederationToken *)createToken:(id) json;
- (NSString *) getFileSignURL:(NSDictionary *)config;
- (NSString *)uploadFile:(NSDictionary *)config;

@end

#endif /* FusionOSS_h */
