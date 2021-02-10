//github
class GitHub {
  constructor(){
    this.client_id = 'd4d0961c14b7006eab87';
    this.client_secret='9e55192e5d00f567132708c3e0ab5eb773fc963f';
  }

  async getUser(user){
    let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    let profileData = await profileResponse.json();

    return {
      profile
    }
  }
}