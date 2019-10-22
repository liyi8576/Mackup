//
//  ICSLog.h
//  FusionCoolOSX
//
//  Created by jianyi.zh on 2019/5/7.
//  Copyright © 2019 alibaba.bpxt All rights reserved.
//

#ifndef ICSLog_h
#define ICSLog_h

#import <Foundation/Foundation.h>

#define LOG_LEVEL_DEF ddLogLevel
#import <CocoaLumberjack/CocoaLumberjack.h>

#ifdef DEBUG
static const DDLogLevel ddLogLevel = DDLogLevelVerbose;
#else
static const DDLogLevel ddLogLevel = DDLogLevelWarning;
#endif  /* DEBUG */


@interface ICSLog: NSObject

+(instancetype)sharedInstance;
-(void)init2;
-(void)logToFile:(id)obj;

@end

#endif /* ICSLog_h */
