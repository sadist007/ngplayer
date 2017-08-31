GIT_RELEASE_SHORT_VERSION=`git describe --tags --long | awk '{split($0,a,"-"); print a[1]}'`

GIT_FULL_VERSION=`git describe --long --tags --dirty --always`

GIT_CURRENT_COMMIT=`git describe --tags --long | awk '{split($0,a,"-"); print a[2]}'`

GIT_SHA=`git rev-parse HEAD`

GIT_RELEASE_VERSION=`git rev-list HEAD | wc -l | tr -d ' '`

GIT_INFO=`git log -n 1 --format="%ci" $GIT_SHA`



echo "{
\"fullVersion\":\"$GIT_FULL_VERSION\",
\"shortVersion\":\"$GIT_RELEASE_SHORT_VERSION\",
\"fullCommitCount\":\"$GIT_RELEASE_VERSION\",
\"currentCommit\":\"$GIT_CURRENT_COMMIT\",
\"SHA\":\"$GIT_SHA\",
\"releaseVersion\":\"$GIT_RELEASE_VERSION\",
\"date\":\"$GIT_INFO\"
}" > data.json