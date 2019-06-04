//
//  FusionHttp.h
//  FusionCoolOSX
//
//  Created by zoborzhang on 2019/3/14.
//  Copyright © 2019 intl.ued. All rights reserved.
//

#ifndef FusionHttp_h
#define FusionHttp_h

#import <Foundation/Foundation.h>

@interface FusionHTTP : NSObject

+ (NSString *)get:(NSString *)urlString;
+ (NSString *)post:(NSString *)urlString settings:(NSMutableDictionary *)settings;
+ (NSString *)post:(NSString *)urlString formData:(NSMutableDictionary *)form;
+ (NSData *)buildBoundary:(NSMutableDictionary *)form;
+ (NSString *)upload:(NSMutableDictionary *)settings;
+ (NSData *)toUTF8:(NSString *)str;
+ (NSString *)request:(NSString *)urlString withOption:(NSMutableDictionary *)options;
+ (id)head:(NSMutableDictionary *)options;

@end

#endif /* FusionHttp_h */
