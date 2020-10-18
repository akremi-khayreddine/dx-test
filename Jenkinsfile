pipeline {
agent { docker { image 'node:6.3' } }
                  environment {
                  HOME="."
                }
stages {
stage('build-app') {
steps {
sh 'npm --version'
sh 'npm run build-app'
}
}
stage('build-lib') {
steps {
sh 'npm run build-lib'
}      
}
}
}
