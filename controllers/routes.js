const router = require('express').Router()
const { posts } = require('../api/blog.json')
const fs = require('fs');
//display comments

let data = fs.readFileSync('blog.json')
let blogDataObj = JSON.parse(data)

function handler (req, res) {
    res.send(req.headers['content-type'])
  }

  router.get('/', handler)

let comments = []
router.get('/posts.body', (req, res) => {
res.json(comments)
})
//display one comment by id
router.get('/:post_id', (req, res) => {
  // find appropriate user
  const post = posts.find(
    post => post.post_id === parseInt(req.params.post_id)
  )

  // send it back to the user
  res.json(post)
})

let fifthBlogPost =  {
    "post_id": 5,
    "title": "First Blog Post",
    "author": "Paul Niemczyk",
    "body": "These student devs keep getting younger and smarter"
}

blogDataObj.push(fifthBlogPost)

let newBlogData = JSON.stringify(blogDataObj)
fs.writeFile('blog.json'), newBlogData, err => {
    if(err) throw err;
    console.log('new data added')
} 

const updatedFields = []
if (req.body.author !== undefined) {
  posts.author = req.body.author
  updatedFields.push('author')
}


// send something back to the client confirming the edit
res.json({
  message: `updated record ${posts.id}`,
  updatedFields
})



router.delete('/:post_id', (req, res) => {
  
    const index = posts.findIndex(
      post_id => parseInt(post_id.id) === parseInt(req.params.id)
    )
    const deleted = post_ids.splice(index, 1)
  
    res.json({
      message: 'deletion successful',
      recordsDeleted: deleted
    })
  })


module.exports = router
