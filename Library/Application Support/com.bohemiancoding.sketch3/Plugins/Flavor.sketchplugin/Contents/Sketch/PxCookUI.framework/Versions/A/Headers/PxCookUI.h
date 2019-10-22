//
//  PxCookUI.h
//  PxCookUI
//
//  Created by featherJ_old on 2017/5/5.
//  Copyright © 2017年 fancynode. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "PxCookUIController.h"

//! Project version number for PxCookUI.
FOUNDATION_EXPORT double PxCookUIVersionNumber;

//! Project version string for PxCookUI.
FOUNDATION_EXPORT const unsigned char PxCookUIVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <PxCookUI/PublicHeader.h>


@interface PxCookUI : NSObject
@property (nonatomic, strong) NSObject *document;
+ (NSString*) getResourcesPath;
+ (NSString*) getFrameworkPath;
+ (NSString*) getVersion;
+ (PxCookUIController*) getCurrentController;

+ (void)initFrameworkPath:(NSString*) path;
+ (void)initWithDocument:(id<MSDocument>)document;



+ (void) checkUpdate;
+ (void) onSelectionChanged;
+ (void) onDocumentSaved;
+ (void) toggleDisplay;
+ (void) about;
+ (void) home;
@end

