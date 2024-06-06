Reproduces https://github.com/renovatebot/renovate/discussions/26549

## Current behaviour

For a config with `postUpgradeTasks` but without `allowedPostUpgradeCommands`,
tasks are silently ignored.

[Debug-level logs](https://github.com/pkubowicz/renovate-post-upgrade/actions/runs/9407275075/job/25912659257#step:3:693)
do not contain string 'post-upgrade'.
String 'postUpgrade' only appears when the config is logged.
There are no warnings logged.

## Expected behaviour

Some minimal warning is logged:

```
Post-upgrade task did not match any on allowedPostUpgradeCommands list
```

Ideally, the command is included in logs,
to make the situation clear when there is more than one task:

```
Post-upgrade command './gradlew dependencies' has not been added to the allowed list in allowedPostUpgradeCommands
```

Log messages are taken from
https://github.com/renovatebot/renovate/blob/b053ca55f3abcded03b2e257f512560dba4970b4/lib/workers/repository/update/branch/execute-post-upgrade-commands.ts#L94-L106
