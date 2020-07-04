//
//  ICSRequest.h
//  FusionCoolOSX
//
//  Created by jianyi.zh on 2019/5/7.
//  Copyright © 2019 alibaba.bpxt All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AFNetworking/AFNetworking.h>
#import "ICSLog.h"
#import "XMLReader.h"

@interface ICSRequest : NSObject

-(_Nullable instancetype)init;
+(_Nullable instancetype)sharedInstance;
-(NSMutableDictionary *_Nonnull)GetData:(NSString *_Nonnull)URLString setTimeout:(nullable NSString *)timeout;
-(NSMutableDictionary *_Nonnull)GET:(NSString *_Nonnull)URLString setTimeout:(nullable NSString *)timeout;
-(NSMutableDictionary *_Nonnull)HEAD:(NSString *_Nonnull)URLString setTimeout:(nullable NSString *)timeout;
-(NSMutableDictionary *_Nonnull)POST:(NSString *_Nonnull)URLString setTimeout:(nullable NSString *)timeout withHeaders:(nullable NSDictionary *)headers withParameters:(nullable NSDictionary *)parameters;
-(nullable NSString *)xml2json:(NSData *_Nonnull)xmlData;

@end
