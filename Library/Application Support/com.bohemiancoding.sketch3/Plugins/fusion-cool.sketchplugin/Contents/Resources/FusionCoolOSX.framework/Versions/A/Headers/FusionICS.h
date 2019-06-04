//
//  FusionICS.h
//  FusionCoolOSX
//
//  Created by zoborzhang on 2019/5/7.
//  Copyright © 2019 intl.ued. All rights reserved.
//

#ifndef FusionICS_h
#define FusionICS_h

#import <Foundation/Foundation.h>
#import <CommonCrypto/CommonHMAC.h>

@interface FusionICS : NSObject

- (NSString *)getIcsParam:(NSMutableDictionary* )body key:(NSString *)key;

@end

#endif /* FusionICS_h */
