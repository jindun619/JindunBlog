import * as React from "react"

function Bio() {
    return (
        <div className="flex ml-8 mt-16">
          <div className="avatar">
            <div className="w-20 mt-4s mr-4 rounded-full border-2 border-primary">
              <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MTFfMzkg/MDAxNjI4NjY1NjgwNTUw.K2a44KxCgskoaKSw8cH5ySnsEuadVA8wphcrBOrDwBQg.R4GfkzCRdTa1jdicp9p4Ph8A4THJ8tX1mZO-uTqzgygg.JPEG.bbekimha/%EB%A3%A8%ED%94%BC.jpg?type=w800" alt="bioImg" />
            </div>
          </div>
          <div>
            <strong className="bg-primary-content px-1.5 py-0.5 rounded-lg"><a href="#!">@Jindun</a></strong>
            <p className="mt-2 text-base-content">lorem ipsum foo bar</p>
            <span><a href="#!" className="link link-primary no-underline mr-2">About</a></span>
            <span><a href="https://github.com/jindun619" className="link link-primary no-underline mr-2">Github</a></span>
            <span><a href="https://www.instagram.com/kimhoojun/" className="link link-primary no-underline mr-3">Instagram</a></span>
          </div>
        </div>
    )
}

export { Bio }