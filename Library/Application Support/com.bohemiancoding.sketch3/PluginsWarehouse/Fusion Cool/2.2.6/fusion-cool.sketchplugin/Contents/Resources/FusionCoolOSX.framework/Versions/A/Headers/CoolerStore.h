#import <Foundation/Foundation.h>

@interface CoolerStore : NSObject

+(instancetype)sharedInstance;
- (void)setStore:(NSMutableDictionary* )body forKey:(NSString *)key;
- (NSString *)getStore:(NSString *)key;

@end
