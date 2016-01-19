# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

role :app, %w{dolphin@beta.coursecycle.com}
role :web, %w{dolphin@beta.coursecycle.com}
role :db,  %w{dolphin@beta.coursecycle.com}

server 'beta.coursecycle.com', user: 'dolphin', roles: %w{web app}
