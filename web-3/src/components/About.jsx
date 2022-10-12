import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full bg-white px-4 pb-5'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[600px] mx-auto my-4' src='https://www.xtrafondos.com/wallpapers/twice-talk-that-talk-10528.jpg' alt='TWICE' />
        <div className='flex flex-col justify-center'>
          <h1 className='font-semibold text-3xl ml-5 mb-5'>ABOUT TWICE</h1>
          <p className='font-semibold py-2 ml-5'>
          Twice (Korean: 트와이스; RR: Teuwaiseu; Japanese: トゥワイス, Hepburn: To~uwaisu; commonly stylized as TWICE) 
          is a South Korean girl group formed by JYP Entertainment. The group is composed of nine members: 
          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was formed under the 
          television program Sixteen (2015) and debuted on October 20, 2015, with the extended play (EP) The Story Begins.
          </p>
        </div>

        
        <div className='flex flex-col justify-center'>
          <p className='font-semibold py-2 ml-5'>
          Twice is most notable for their consistent employment of "cute" concepts which was further supported by the group's 
          bubblegum pop sound, which was seen as a departure from the usual retro style of music that was seen in their predecessor 
          labelmates and fellow girl groups Wonder Girls and Miss A. The group had come to develop a signature "color pop" sonic style described
          as a combination of rock, R&B, and hip hop coupled with notable hooks in their music. Their "cheerful" musical base is employed alongside
          a colorful style in terms of the members' fashion, and while they have gained notability for emphasizing their youthful image, 
          Twice has since adopted a more mature style which was first seen with the release of "Fancy" and "Breakthrough" which saw the group perform more sensual 
          choreography for the former while employing a brassier electro-pop sound in the latter. They have since experimented with EDM, synth-pop, and retro soul among 
          others in their eighth EP Feel Special; tropical house, Latin pop, and new jack swing in their succeeding EP release More & More; and retro-synth, dance-pop, Japanese city-pop, and 
          contemporary R&B for their second Korean studio album Eyes Wide Open.
          </p>
        </div>
        <img className='w-[600px] mx-auto' src='https://c4.wallpaperflare.com/wallpaper/563/310/380/twice-chaeyoung-twice-twice-dahyun-twice-jeongyeon-twice-jihyo-hd-wallpaper-preview.jpg' alt='TWICE' />
      </div>
    </div>
  )
}

export default About