### Rust, a love hate relationship (10-11-2024)

The Rust community used to annoy me. Developers in general love reinventing the wheel but no community
enjoy doing so as much as Rust developers. To date, I have lost count of the amount of apps and tools 
that were rewritten in Rust that absolutely nobody asked for. From, an htop GUI (why?), to the Zed text
editor (also a GUI for some reason), people just love rewriting stuff in Rust. It took me a while to 
set my malice aside and give it a try but here is why I love and hate it.

#### The hate

The argument I always get is "it's the fastest memory safe language. Wouldn't the end goal to make 
every app as fast as possible?". This is a fair argument and a fair question. My answer is no. If speed
of the application was the be all and end all, we would all be writing stuff in C. C, of course provides 
many ways for you to shoot yourself in the foot and for higher level applications, the speed gain of C is 
simply not worth the time and effort spent building the application. On top of that most systems are already so fast, that the speed gain is almost negligible. Simply the fact that it is fast, in my humble opinion, should not make it a first option for every project, especially large ones. After working with it a bit myself, I believe it would a lot more difficult to maintain a project in Rust than 
it would in a less verbose and opinionated language like Go, Php, or even Python. If you're working in 
a company or a small team, people may not have the time for you to fight with a borrow checker or wait till 
lunch for you to compile. A lot of it is skill issue but I argue that someone who has mastered Python would 
could develop the same product much quicker over someone who is a master of Rust. If time and effort really
is not a factor, I would by all means vouch for Rust.

I can think of no better example than Andreas Kling, who is currently building the [Ladybird web browser](https://ladybird.org/). 
Initially he and the devs he was working with wanted to use Rust but decided against it, due to its lack of 
OOP support which he claims in this case was necessary. Developers really had to fight with the language to 
get things done. Here is a case where you would think speed gain would be imperative, yet devs devs decided 
against it.

Another case study I like to mention is the Zed text editor. At first I thought this is okay but when you really
consider what they did, it begins to seem incredibly unnecessary. Cool for a hobby project but as an editor to use in production, completely unnecessary. There are honestly no defining features, apart from the fact that it was written in Rust. 
In fact, the fact that they made it a gui and not a terminal based editor immediately made me hate it. Not just that but Neovim 
is already so incredibly fast with a galaxy of support and it's written in C. I would take years on years for Zed to even remotely catch up to other text editors.

#### The love
With all this being said, I do still like the language. It's expressive and has lots of small quirks. I have in fact developed my own open source project in it and had a ton of fun doing so. 

In the beginning, I steered clear of it mostly because of my own lack of understanding of certain fundamental programming concepts like how a string actually works. Once I had learnt C, I could better understand, for instance, why Rust may have multiple string types.

The community support around Rust is phenomenal. I have never come across a technology that is this well documented. Normally I read like 1 or 2 pages of docs and go straight to just googling individual components of the language but the [rust book](https://doc.rust-lang.org/book/) reads like a haiku. It is easily some of the most user friendly documentation I've ever read, making the learning curve just that much smoother.


Contributing to open source I also found to be one of the easiest things to do. Literally all I technically needed was a .toml file with the relevant information and a Readme, documenting the app and I could publish. Currently I have 2 apps already published [zmove](https://crates.io/crates/zmove) and [zcopy](https://crates.io/crates/zcopy).


#### Love or hate?
For small projects projects and programs that require high levels of speed like systems level applications I would say Rust is a great choice. Maybe one day the mythical Rust jobs actually become a reality but till then I will probably continue developing in Rust for hobby projects because I have developed an appreciation for the language. To be honest I am very much of the mind that it is not the tool but the builder. I'd say love (8/10)


