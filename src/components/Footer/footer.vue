<template>
    <footer data-aos="flip-down" data-aos-delay="100" class="w-full flex items-start justify-evenly">
        <div
        class="Footer">

           <ul class="Footer__nav">
                <li class="Footer__nav__item">
                    <a class='no-underline flex  items-center'
                    target='_blank'
                     href='https://t.me/ToshDTU_Matbuot_Xizmati'>
                        <Image class='w-10 h-10' src={telegram} alt='icon' /></a>
                </li>
                <li class="Footer__nav__item">
                    <a class='no-underline flex items-center'
                    target='_blank'
                    href='https://t.me/ToshDTU_Matbuot_Xizmati'>
                        <Image class='w-10 h-10' src={instagram} alt='icon' /></a>
                </li>
                <li class="Footer__nav__item">
                    <a class='no-underline flex items-center'
                     target='_blank'
                     href='https://t.me/ToshDTU_Matbuot_Xizmati'>
                        <Image class='w-10 h-10' src={youtube} alt='icon' /></a>
                </li>
           </ul>

          <ul class="Footer__info">
            <li class='text-white'>
                <p >Manzil:Toshkent shaxar 
                universitet ko'chasi 2-uy</p>
            </li>
            <li class='text-white'>
                <a class='text-white' href='mailto:tstu_info@tdtu.uz' >Email: tstu_info@tdtu.uz</a>
            </li>
            <li class='text-white'>
                <a href='tel:+99871 000 00 00' >Tel: +99871 000 00 00</a>
            </li>
            <li class='text-white'>
                <RouterLink to='/' >TDTU fakultetlari</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/' >Ilmiy bo'lim haqida</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/' >Texnopark</RouterLink>
            </li>
          </ul>

          <ul>
            <li class='text-white'>
                <RouterLink to='/' >Home</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/doctarant/doktarant' >Doktorantura</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/tadqiqot/tadqiqot' >Ilmit-tadqiqot</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/reyting/reyting' >Reyting</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/talaba/talaba' >Iqtidorli-talabalar</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/tijorat/tijorat' >Tijoratlashtirish</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/jurnal/jurnal' >Ilmiy-jurnallar</RouterLink>
            </li>
            <li class='text-white'>
                <RouterLink to='/' >Texnopark</RouterLink>
            </li>
          </ul>

          <div class="Footer__map">
          <iframe class="Footer__map__item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7750.169201656863!2d69.19970163012668!3d41.353714196145624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sTDTU!5e0!3m2!1sru!2s!4v1667632619793!5m2!1sru!2s" width="350" height="250"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    </footer>
</template>


<style scoped lang="scss">
.Footer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    bottom: 0;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    margin-bottom: 0px;
    background-color: #1b6b50;
    &__nav{
        margin: 0;
        &__item{
            margin: 20px;
            a{
                color: rgb(255, 255, 255);
                
                img{
                    transition: all .5s ease-out;
                    margin-right: 20px;
                    &:hover{
                        scale: 1.2;  
                    }
                }
            }
        
        }
        
    }
    ul li{
        a:hover{
             color: red;
        }
    }

    &__map{
        display: flex;
        &__item{
            border-radius: 10px;
        }
    }
    &__info{
        width: 250px;
    }
}



@media only screen and (max-width:1200px) {
    .Footer{
        justify-content: space-around;
        &__nav{
            width: 100%;
            display: flex;
            align-items:center;
            justify-content: space-evenly;

        }
    }
}

@media only screen and (max-width:1200px){

}
</style>