pipeline{
  agent any

  environment{
    VERCEL_TOKEN=credentials('vercel_token')
  }

  stages{

 stage('Install'){
      steps{
        bat 'npm install'
      }
    } 

   stage('Test'){
      steps{
        echo 'No test steps found'
      }
    } 

   stage('Build'){
      steps{
        bat 'npm run build'
      }
    }  
   stage('Deploy'){
      steps{
        bat 'npx install --prod --yes --token=%VERCEL_TOKEN%'
      }
    }      

 
  }
}