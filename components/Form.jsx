import Link from 'next/link'

const Form = (type, post, setPost, submitting, handleSubmit) => {
  return (
    <div>
      <h1>{type && type} Post</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" value={post.tag} onClick={() => setPost({...post, tag:e.targte.value})} />
        <textarea value={post.prompt} onClick={() => setPost({...post, prompt: e.target.value})} ></textarea>
        <Link href="/">Cancel</Link>
        <button type="submit" disabled="submitting">
          {type ? `${type}...` : type}
        </button>
      </form>
    </div>
  )
}

export default Form