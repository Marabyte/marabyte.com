---
title: How to deploy Android App Bundle with Cordova and Fastlane
date: 2020-05-17T00:00:00+01:00
code: true
featured_image:
  alt: ''
  caption: A geometrized version of a photo by Avinash Kumar on Unsplash
  src: "/uploads/leaves_avinash_kumar.svg"
summary: Google's Play Store offers a smarter way to deploy Android apps and the good
  news it just requires a small change in your current Fastlane and Cordova setup.
tags:
- cordova
- fastlane
- android
- post

---
If you have an app on Google's Play Store you may have seen this warning on Google Play Console.

![Google warning indicating the app could be 5.8% smaller if we switch from Application Package files to App bundle files](/uploads/android_app_bundle.jpg "Android's App Bundle call to action ")

By using App Bundle (.aab) instead of Application Package (.apk) your Android app could be smaller.

In this specific app the savings are 5.8%, which I admit it's not too impressive, but every byte counts if you're trying to build a lean app, especially if it almost comes for free!

We changed one line in a configuration file and saved 1MB. Win!

If you are using Fastlane to deploy your apps, you may have a `Fastfile` with a configuration like this:

```ruby
# Fastfile
platform :android do
	desc "Deploy android app on Play store"
	lane :deploy do
    # Cordova Fastlane Plugin
	cordova(
      platform: 'android',
      keystore_path: './secret/release-key.keystore',
      keystore_alias: 'secretKey',
      keystore_password: '*****'
	)
	supply(apk: ENV['CORDOVA_ANDROID_RELEASE_BUILD_PATH'], track: 'internal', package_name: 'com.xxx.xxx')
	end
end
```

We just need to change the `supply` configuration to:

```ruby
#Fastfile
...
supply(aab: './platforms/android/app/build/outputs/bundle/release/app.aab', track: 'internal', package_name: 'com.xxx.xxx')
...
```

And that's it! Free savings!

\##How does it work?

The `supply` plugin already supports builds with .aab files, we just need a path to the file. You'll notice in the original code we're using the environment variable `CORDOVA_ANDROID_RELEASE_BUILD_PATH` instead of the actual path. That's because `cordova` plugin is exposing the path to the .apk but not the .abb.

Don't feel discouraged by the small percentage gains. Your mileage may vary depending how many low-level APIs you are using.