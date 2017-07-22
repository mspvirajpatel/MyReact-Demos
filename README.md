# React-Demos

# dependencies  : https://docs.npmjs.com/files/package.json

Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.

Please do not put test harnesses or transpilers in your dependencies object. See devDependencies, below.

See semver for more details about specifying version ranges.

version Must match version exactly
>version Must be greater than version
>=version etc
<version
<=version
~version "Approximately equivalent to version" See semver
^version "Compatible with version" See semver
1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
http://... See 'URLs as Dependencies' below
* Matches any version
"" (just an empty string) Same as *
version1 - version2 Same as >=version1 <=version2.
range1 || range2 Passes if either range1 or range2 are satisfied.
git... See 'Git URLs as Dependencies' below
user/repo See 'GitHub URLs' below
tag A specific version tagged and published as tag See npm-dist-tag
path/path/path See Local Paths below

devtool : "Search"


Refrence Sites:

https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
https://www.webpackbin.com/bins/-KpdDg6ScYGeTEJvgVQ1
