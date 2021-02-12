class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
    
    retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
  }
  
  module.exports = HashMap;
  
  const bsms = new HashMap(15);
  bsms.assign('Personal Responsibility', 'Personal responsibility or Individual Responsibility is the idea that human beings choose, instigate, or otherwise cause their own actions.');
  bsms.assign('Growth Mindset', 'In a growth mindset, people believe that their most basic abilities can be developed through dedication and hard work—brains and talent are just the starting point.');
  bsms.assign('Future Orientation', 'Future orientation is broadly defined as the extent to which an individual thinks about the future, anticipates future consequences, and plans ahead before acting.');
  bsms.assign('Persistence', 'Persistence is the ability to stick with something');
  bsms.assign('Communication', '...');
  bsms.assign('Teamwork', '...');
  bsms.assign('Proactiveness', '...');
  bsms.assign('Orientation to Detail', '...');

  console.log(bsms.retrieve('Future Orientation'));