//
//  ICSHttp.h
//  FusionCoolOSX
//
//  Created by jianyi.zh on 2019/5/7.
//  Copyright © 2019 alibaba.bpxt All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ICSHttp : NSObject

- (NSString *)get:(NSString *)urlString;
- (NSString *)post:(NSString *)urlString settings:(NSMutableDictionary *)settings;
- (NSString *)post:(NSString *)urlString formData:(NSMutableDictionary *)form;
- (NSData *)buildBoundary:(NSMutableDictionary *)form;
- (NSString *)upload:(NSMutableDictionary *)settings;
- (NSData *)toUTF8:(NSString *)str;
- (id)request:(NSString *)urlString withOption:(NSMutableDictionary *)options;
- (id)head:(NSMutableDictionary *)options;
- (NSData *)getData:(NSString *)urlString;

@end
