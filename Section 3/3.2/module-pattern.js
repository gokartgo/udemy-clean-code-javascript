function ModuleLoader() {
  var modules = {};

  function getInstance(name) {
    if(modules[name]) {
      return modules[name]
    } else {
      throw new Error(`undefined module: ${name}`)
    }
  }

  function define(name, dependencies, instance) {
    if(modules[name]) {
      throw new Error(`Module ${name} already defined`)
    } else {
      var depsInstances = dependencies.map((dep) => {
        return getInstance(dep)
      })
      modules[name] = instance.apply(instance, depsInstances)
    }
  }

  return {
    getInstance,
    define
  }
}

var loader = ModuleLoader();

loader.define('HttpClient', [], function HttpClient() {
  function get(url) {
    return fetch(url).then(response => response.json())
  }

  return {
    get
  }
})

loader.define('PostManager', ['HttpClient'], function PostManager(httpClient) {
  function getPosts(url) {
    return httpClient.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
      console.log('Posts: ', posts)
    })
  }

  return {
    getPosts
  }
})

let postManager = loader.getInstance("PostManager")
postManager.getPosts()