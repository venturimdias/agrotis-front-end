import { Botao } from '../'

import { IconFacebook, IconLinkedin, IconYoutube, IconInstagram } from '../Icon'

import * as S from './style'

const BoxUser = ({user}) => {
  const nome = user.Name.split(' ')

  return <S.Container>
    <S.Imagem>
      <img src={user.Img} alt="" />
    </S.Imagem>
    <S.Desc>
      <h6>{nome[nome.length -1]}, {nome[0]}</h6>
      <small>{user.Bio}</small>
      <div>
        {user.Social.Linkedin && <Botao href={user.Social.Linkedin} target="_blank" label={"Linkedin"} nolabel iconBefore={ <IconLinkedin tipo={"rouded"} /> } />}
        {user.Social.Youtube && <Botao href={user.Social.Youtube} target="_blank" label={"Youtube"} nolabel iconBefore={ <IconYoutube tipo={""} /> } />}
        {user.Social.Facebook && <Botao href={user.Social.Facebook} target="_blank" label={"Facebook"} nolabel iconBefore={ <IconFacebook tipo={""} /> } />}
        {user.Social.Instagram && <Botao href={user.Social.Instagram} target="_blank" label={"Instagram"} nolabel iconBefore={ <IconInstagram tipo={"rouded"} /> } />}
        {user.Social.Site && <Botao href={user.Social.Site} target="_blank" label={"Site"} />}
      </div>
    </S.Desc>
  </S.Container>
}

export default BoxUser