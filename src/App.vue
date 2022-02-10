<template>
  <div class="container justify-content-center p-0">
    <h1 class="m-0 text-center p-2">{{titulo}}</h1>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"/>
      </b-input-group-prepend>
      <input type="search" placeholder="Pesquise aqui"
      @input="filtro=$event.target.value">
    </b-input-group>
    <b-row cols-lg="4" cols-md="3" cols-sm="2">
      <b-col v-for="(foto, index) in filterPics" :key="index"
        class="p-4">
        <Card :foto="foto"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Card from "./components/shared/Card/Card.vue"
  export default {

    data() {

      return {
       
        titulo: 'Criaturas Mitológicas',
        filtro:'',
        fotos: [
          {
            url: 'https://images.tcdn.com.br/img/img_prod/664029/schleich_eldrador_creatures_lava_dragon_oficial_licenciado_3603_1_bdbf5236a4c5dc80d8478c901662016d.jpg',
            titulo: 'Dragão'
          },
          {
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHB4aHRwcHBwkHh4cHCEhHBwdGh8cIS4lHiErIRwcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCc0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ0Mf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xAA6EAABAwIDBgMGBQQDAQEBAAABAAIRAyEEEjEFBkFRYXEigZETMqGxwfAHFELR4SNScoJisvGSMzT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAwQCAQX/xAAiEQADAAICAgIDAQAAAAAAAAAAAQIRIQMxEkEiUQQyYRP/2gAMAwEAAhEDEQA/ANmQhCABCEIAEIQgAQhJveACSYAEknQIA5WqhoLnGAOKaVcW4iWNEcC4wPTX1hMn5XAYipMAeBp0A4Oji4/BVHbG+DmOJpvzN0yOaLefmsVWDSksOL2ziGa+xjhGY+plFPesMcG12Fsx423bfQkageqzTE7zPdm0yu1by7cuC80N44LMwzZbHqLRPOEtVRvxRtuExjKjQ9jg5p4g/McFzF41lMS49hxPYarG8Zjgyo59B5a5sEFp1mLHnroVa8HSbUY2u8veXC4LiRa2g94W6orlwjs8WX2WittuDDWZv9gCf8ZEE+YUdiduuc4BpcwTewMHkdRBsQe6YfmKJ8OVrRFoEdi0jioHaWOdSqEE5mEeEni3WDHEEpL5afsfPFK9E1R3hrsxBa9+am3WzZgcRYSSCPUq1YbblF8APAJMQeY1E6LIsZiznlswAI62sOt/kmtHFvJLYc5x/S0GT/cbaWMT1TJul2Zrjl9G+AoWZ7K3wrUGZKtLM0aAOl4Gtzceqm2/iHhMoJ9oHH9GQyPPQ+RTlaZPUNFxQqjit465o+2p02NaLuD3eNreeWwTCvt2pDHuxQFJ9g9jGQ13JwcCh2jill9XVTWbaLT7N2IcXhshxa3K8f3RGnCyeYbeED3nteM0EsEOaI1LZJdflfoUeaByyzISVGq1zQ5pBBuCNClVsyCEIQAIQhAAhCEAcUVvDVIokQDmcxpB0LXOa13wJUqoneSiXYaplBLmgPAGpLCHgeeWPNcfR1dlf382k2lSbTDiwnk0RHK+ix3E1iSVf953GuBUgSWi/IX04+ioeIwxzHjHJJTyxmNCNGm55gA+icPwptEzyNiOGhU9sfHFhLRAbbxCw/1BI/dPccw1GuAc0CROcgiJ1B/ZYrkwxi49dlUoh5eAJ5DrwWn4emWMYwataByB+5VGp0WU3S2uwv8A8Xx2zEaeSs+wMW9zyKgGgiDbS2nZY5KybifEkXbJa+HTB1jkeGnmO3qoR+BL3GlUdDv0HhI87gqex2K9kQXe6TY97R3+i816LKrA/lBB+Jnolex3ZXmbrvc4Eva1o1MmfIJzXfSoMLaYOb9Tz7x5+XRSlFpcwvdOWSIB1ynLHwURjCC4gN6rrpvTOJJbIiviyRc68P54pvhcQKb82VsmLu4Re1jrpMFc2jUGgEdvn20TOrUEC1/4TYWBVPJYNkbRL8S9j3y2qC2xkAwYiR2GiiH7RAwzqJOjwQOl5PS/zUdgcYabw/Uj6iEi+XAuM6/fzTcCW/ola213lrPF4msyX/tBsLqU3UxLnVhImI1mI6xw6KrGg9onKYHGLX6qz7t5qNIVjM1CWsEgEgakzoJsOxRSWAl5ZpNDGMovpuFRoZVBDmm3iEeJuuhJkWsZMwrTKyjezaEYagHMyVA7MC3gBqJF5mFpXtT19UyXoxS2PkIQtmAQhCABCEIA4oXePHilTuXDMcvhn/sPd+fJPcTtGmwkFwkfpkT6LP8AfXHisWhpqFrbiGjLMmbAzPBK5LSWE9jeOG6WeiGIyP8AZ3LHjwOOjW65elyfJI4nBFhJY3MOJAkHmkaRc8ZQ8OMyAfCQRyEfVJYHaz6MNLZyky0/W6RLyUXDW/Qo/CsyF7Dldq5h0Og8PWJKbvsPCTpr/wC9kpjMtX+uwSSTmYD7o/a6aYmoC0OaAJ4DgRr811zkxNYFKpa8EAtHG5j0nVSuwMeyiAHEkHR3Lp2k/YVWc+dZV32XsVjsLnJGbXpY6efPss1KlG5eWTYxdGsyJDgYMcRF/uOqTx1QNpBjByAHQaz5Tqo3DU6dSicpyVKYJETeBMHuAlsW9rKAkjO656Dj8DCU8jDv5tjaTabDoSe0kmPiofHYkBrgdf3TMYol8DT+IA7qSrYVgbmf7xOnQIxh5ZwrDCSfl5pepTosADgajzcgOLWtHKRcnQrmJqmTlAYOAF7DmUhRIuDJOnDXuSni2LMp03e9Ry9Wv9JDgQtO3a3aphmeth6YBALQ/MXd3tcS0WjhPNMN1Nj4Zv8AWfWp1DTGYtBlrP8Ak8n3iOwHeyabwbwOryS51PDAxY+Nx/nlMBMnW2Jp5eESu8u3qDqT8NRYHtcC1wYLADg0AdPe05Sqfh8Rhnte6oMrmCGMj3Wi1u2sd1H4nboa3LRb7Mc5BeRymFENpPf7rXGTrB1PBDzXYLC6Hu2tsPqwx5zZCQ09OH31W6wsz3U3AqPe2piRlYL5T7zuVuA7rWcg5D0TJWhdPZ7QhC2ZBCEIA4VD7X2hl8LT4ok9AdOyksVVyMc7kCVTsZi4lzoJ1uePEnmkc1+Kwh3DHk8sSfAa55ptb/ygST0/dRFXC1K0xLW8zInsPqpoOzgA3434dUrVeGstxHwUWfZZ/CsP2BSaJeSSFB7Rw7Gmzi4jXNdTO1MWCOvfzn5eirmJfIt5/wA+q3GWwbwONk1GsrNJs1/gceWbQ2tYx5Sme1cKWYh9MGcukdgUmwkg+oPLX77p3Qrh9d73G+gNoJsPROTwmJtJ0sEfTwxDmlwtmHpKv2Fe5tB9Fwk5TcE6WyGRwICqOLxgnLFuKtezXtdh6VQOOYAsN/7SRx5QLLFNtZZ2UuiAxWKbTrvNJ3gJMSDIBtlM8Rz4ym35l+IeGNuTqe9yV3abC95ABDSePE844KwbpYANeSRpp+65rGfZrZDflHUHguGgn4j915x20MwBte/aLAfNTW9tMlubSHEev/iqTC24Im2nVcn5dnG8CuIoOYA99nOHu8QDYZviY105phfVLV3udECGiwBPqSvIZzTp0tim9klsdj3NqXIYxntKl7FrTLQQfe8QCb0MLXxb/AwumwAGg7cB10TZzzOSfeib6gXj1Wy7hGkcIw02gG4fzzjWTyuI7pkrJimVfY/4ZEw7EVIke4y5Hdxt6Aq/bL2PSoNa2mwDKIBPvdb9eikkJqSQrJ1CELpwEIQgAQheS6EAMNs1MtFx5R8ws+q4hznua7TUek+lz6norztLEZhltlOs6mL26WVcx+Bzvzf8YPwj6+ii5qTeizglpbGlKsRJJBJ18rW9E22ljfCbmBx6DguVHwOtyfj/AAFEbVrNDcvXjxv8v3SEsse9EdiqsmSbn6qNqPMQlqla/km9SLFUTOBNMCLanxRIHHjqujKGiB4rz5aFIl59PuF7Y7T71WmjiexCu4ypvdraOQuY6Mh8V+BA19FFYmnAB5rmBeGvaXe6DcdOyGk5M9VsuNTZr3EVMmp4X00kcFN7v0Peee1tOv0VYoVcSKrnUnZmEmo4TLYb0HQxKk8PvCGgjKRPLr/KQ/4OWxXbrC8Ec5InT+OSo9ekQeWhv9FO7V2pVe4ezAhsZrA3NwINlH4kksa5xJcSbzc8z2my7GUYrZHF/BeGzP8AKH2P3wXRqqEK9irIBB4ifjqtX/C5hGEcedRx+DR9Fkzmnstd/DvG0PyzKTHgvbmL2mzsziXEgcRfULUdnL6LkhCE4QCEIQAIQhAHlRW1MXfIPPvYgFSb3QCToLqmUMU59YE8SXHyHH4eiRz14rC9juGPJ5folDTA8TruNpPyHJN4BuONpTPamM4A9+xt8p9VyniA1klQ52VpaIPbsMLiOPTnqqpiXkkzcwrNtKtmJ5BVx9IFx7z9E2cdhRGPZ1/8+yvHtRoE7rNE26KPcD9+idOGJrKPcTqvbWwkAUrmH/i2ZTFXszAcxZIUqZLwyYJIE9zqlQ+9uCe4V1Nrs72F8CwDoBMWJ5x3WejWPLZaNi1BTeaQY052wAYBexwgwefbkm2I2OxjvDUflJt/TzSAYBD5gjrHAr1s3b9DI0PBa9hlriNA7UNIPQxOg7Lw/bYLxkcWtEhsEQB20OvLiUipaZtYY2oZHf06Q8RJAzeIveOY04zl6plvJgfY1smfOQ1ua3uuIlzRHJ0+qkMVtwMIDAJkk5RF3cSZ17KFYx9Zzi1pcYLjFzAEkknoNVuJwjNPY2fSLsvml6NGBMfYXlg0v96qf2Thg9jgQJER6308l2qwglbIOu31SeCxz6FVrmuyvYZB/edR0VrxuxAGlw4NAA4l2pVPxTfGZBEIishU4N73f2j+Yw9OrxcL/wCTSWu06gqTVN/DJhGDvxe4xGgmPPRXJVrokpYZ1CELpwEIQgCO25VLaFRwMEN15KlbuOL5f7vAeQ/lXLeCu1tB2YgBwy36qsbOAyAjwt0AGoHbh9ZUf5HaKuDpjPaVZjX5W+L9xxPT9kxxeLEAGOdtIU+NmUnD3ddTmMnuZlNMbu7SeLF7TzBMDlYqdPHZSU7H7Qh0CL6+nFMG1tTPE/spHbW61WiC9pFRg1icw6uHJQVCk9xgNJninSpa7FNvOMHuqZckaY5AzKlTsp4GZ09PLX6JhB6+S0qXozjexPJzHw+a46hwDT9+SdMrubaBbv8Aukq9d7tUZrJrxn7EfZkXsPP6JSplgawLa8YEkcufmknOKdYTHZYa5jXt5EAjz4+YMrW+zj8cYQ0LM1x6KS2VgXVXNpNaS98hokagE6nQW+Cmth7Dbi3TRpZGt955L8o6AuJk9BMLQ9292KeFEmH1SIL+Q5NnQfErUy676F+cyv6VPY/4bPJDsQ8NH9jLn/6Nh8VesBsOhRpmnTYGtc3K4/qcCCPEdSbnVSkITlKQh02YRt/Zj8NWdTcLNPhP9zD7pny9Qldj4sMcA4m5j1Nlse1Nk0cQ3LVYHDgdCOxFwqRtP8Pcoc6nXDWiTDxoBe7xwA6JN8TGxyL2I/mmlgBdJmLXuTB9FVdpYU53Ft5JJMWEnRTOwcF4j4iWj0J4njFwnm3cM3JmjS9uAbe/dTL40U9kLsXbNfBvBaS5hN2knKZ6cD1+a17ZmPZXptqMMtcPQixB6grNBh2OoZssyJk8OV+Ctn4cvJwpB0FRwb2hp+ZKp4bbeGT80JLJbUIQqCcEIXCgCsb5UM7WtBvchvPSfoqphmV2ghrZniSPgpnenaBZULXhzTq02ILRy9bhQbdvM/UHD5LzeaqdvR6HCkoRJ4I1eLeHAjXrKesrPm4PpA+KimbbZFjbzTqltekdXx6pW8DR8aruIUHj9lZRmbOUmT/xvPpaFNUcbTcID2nzCdnI4EeFwIiy7K+zjaKjs0QS1wHmNeScV9h0ngjQniCAZ68D2UlU2YGnM27f7bAgcg6PmPMJKjs5tQw279S0vLHxzaDLXDqCmTvoXWFtlX2hu09gLwQRrHIeah24B2XMbTp99VoG1tjuDC3LUd/sDHSAbjh5qK2jhG5WZKTmuJyizgM3ygAX7LWaRnTKc3BPzAMaXE2AAk+gVs2RuBUdldiHik2dCRnI4xwb5z2RjMSGDIxoka+Gcxi5++RTKrtus/K0tcS0RBJIA4gctBpyTJv7M1D9GubMwVOjTbTpABjRaPiZ4kp6s+3XxTWZXVH1mO0MvDqbr38OXw+XrKvNDFsf7r2u/wAXA/IqmaVLRLUtMcoSFHENdOVwdBIMHQgkEHlcEeSXWzJxQm9+f8pVyawJ/wAZGaPKVNpltXDuqUajGwHPY5onS4i6zSyjqeGZ1sF5yE83ERyjy+4TzaLJY+/6TbmBcgqDoVX4ao6nUblINxykSI72U6yqHtMGQ4QO36j8h5lQVLVF8vKIzH1PZ4cN0loHnaVedy8AaOFYCIL5eRyzaD0DVn+3HF76VBglznARHHTgtcptgAchHoqOCdNk/PXSFEIQqScEIQgCP2lsqlXAFRsxoQSCJ1gi6gcfuTTc0+ze9juBJDm9iCJ+KtqCsOJrtGpup6Zim2tnV8M/I/xSAWke67nlMcOSiXVX8ohbbtzC0X0y2q0Efp4EO0BaRcHqqBjd33AS2oXCNHNnTXQhS2lLwVRXktlObiqkyDft+yksPtuoziR8lyu0sPiY1w5gkeZBXWYR72B7aLywjVrc45G7ZjzWV8vRvr2TeE3tmz/UEfJSFPaNJ92vLXcOBHa6omIw7RqCzuCEhBHuuJHdcXEs5R3zNBZXrA3xMt6hjj6ukj4pSpiGnLLgYEN0tzyxxKz+n7Qjwh5AsYBPfRdoY57H5tSNM02PkV2orHZlOcl3NFuaTAOkzwTerTYwktE9rm1rcVWDt2qZu3UXgT20XDtuqSfd6CPv1Wf82a8izP22xnvU3ju3+VHU9uBry9jyw3iNYPDl5KDq4hz3S6NeXyiwVg3Y3bfiSDkyUgfE8xeLkNbxM8dFuYedGapJbLH+G9YufXLS4shpzEkySXep58dFoCSoUWta1rRAaAAOgsllZKwsEdPLyCEJOpUAEkgDmTC0ZM8/E7AQWVmgeL+m4iZnVpPDSR6Jps5wZhmEm7Gx/wDRkfAfFWLfKqzEYf2NNwc972kRPhDXAuceQie8qo7druaW0WSS6LR/qB6CB5qTlw3hFfDlTsW3Lwjq+ONR3uUiXanU+Fn1P+q1cKA3S2IMNQDTHtHQ5568G9gLdbnip9URPisE915PJ1CELZgEIQgAXCUKJ21tL2bcrffcDHThJ+nY8lmqUrLOpZeBhtHE56jgIys8IP8Ay/V+3kmLxM8gPjx++qabNreE/wCTr8dfinXtPCYXmXeaZ6ERicFXx1FuV1pj7tKZbv4+rhX5mnwn3mTDXfs7kfopjaFGGu5m/mqxXqwTMrfFTRm0mbJszHUsTTD25XjqBYjmDoenZKVNj4dxl1CiTzNNp+YWQbtbedhqwcT/AE3nxj4B46hbEzHNygzIIkEXkc1dNJrZJUtPQsGtY2AA1o0AAA8gFne/9Sk+GMYw1iQ5zhGZrQP1Eak8jNgeilds70DM5lKHOFi4HwtOh/ycCNNOarNDBEvLiS5zrlx16yUnk5F0hnHxvtlaOzqgjwg+fzlehs54IJbHdXV+zRAM36KPxOFynT7sk+bZRhFcw7m06jXPYHta6S02a4cRb+VtWxMbRq0muoZQwWytAGU8QQLBZRiMGHAwNPkn24G03UcV7IkZKnhM/wBw90j5eadw36E80+zXEnWqBoLjYAEnsEooTbtCrVAo0yGB13vImGzo0RBceXnymlvCJl2cq7e8AdTovfIBbMNBnnJkeiiK21mul7y0uBjKDOTkAOfM8eyXdu/iCcnt2imAADlOY2i492fuFB7Z3OqUmPqU64LWtc95eDn8IJtEjS3BTUuRrY+XEvQ+/NueyeE8+HHzSe6uBFTFvrOH/wCTWhv+T81+kAEf7Jhs6u/8u3iY9eZJ4ypTcfEt9vXZmu5rHBvVpcHH4j7CxxY89jOX9XgvIC6uLqtIwQhCABCEIASqvDQSTAAknoFQTiXVHuqO/UbDk39Iv93Vu3iqFuHqEawB6kA/AqjYWsHAEcFL+RXSKOCe2OoyOyDiTCd0/dTTEOu08L/Lh8U4z2Cia3krl6wRW2HwzuVT8cbEhWnbz1UsaYZfifgmcIuxm10eiumOwGIpYSgx73Br2FxZyvOV3SHNtOsrz+H+7Pt3CvUb/SYZAIs9w4X/AEjjz05q9764XPhyYu05uw0MjjqrHPxbJ3fySM+2WGwJM3Gmp/T+yn6zAMpHD5cVUWvyOtaJ9dfop2jtKWeL9Q17j4XUtL2UonQ+U3q0xoUls+sHCxBsnNVpIXEcKxiXljjyv6clXnVwHh4uAZt0Mqy7apSAfuVTnm8JnGtmLej6NoVQ5rXDRwBHYiUpCa7L/wDxpf4M/wCoTtXEYnUMAmJ6Kt7S2zTq0MS0ZhDHsiJMkFoBaLgk6SvON3h9mRTrNAJmSQcpINotxEGb6jiqftqviBVztBptIytzOmBwBdqf9hZIvkw9DYjPYvh4w+GHtHgvc0FzRFp0HUptuxn/ADeHcARnc8ibSzKQSbd/4THZeED3vfWdIHF0x6nyV23O2eXvOKcIblLKTYiGn3necQPPmlcc5oddYguYXUIVhICEIQAIQhAEVvHSLsNVABJyzA1sQTHkFl2BxRGtr+n7rX8VSzMe23iaRfS4i6xT2wsSORUn5E7TKeB9os9W7WO6Jwx8a8lFbRxsMYZ1j5SvdGtIUdLJUsoZ7fqwBPU/foFAbPwD8TXZRbq92p4AXLj2AK97cxpfUyt0aPUnUq4/hRgTNau5oizGnj/c6Omnoq+GOifkrTNA2fgmUabadMZWtEAfepS9SmHAtIkEEEcwdUqhV4JDLd5N06tIudSaalPUASXNHFpAFxc3Vbw2IgZe5vy1P1W6FU3e/dIVQ6tQGWsPEQNHwNOjuvHTqk1xL0Pjl9MoGG2i6jUj9BPz5K5UMQ1zQQdVnz6ZcDm1Fo66funezdpOYQ1xtp8vgk1P0OyWDarPD27qoV8MDVDeBcB6kBWipiQ8WVax4LXhw4GR5R+yIezlrRv9JgaABoAAOwsEokMLUzsY/wDua13qJ+qXVpGRO19jsxDYeJjSefDseog+VlVaGysW19QZQ86Me8TAPKwFuP1V/Ql1xKnk3NuSl09zXPdmxFcvmJDRHG7Z4DhaCrhSphoDWgAAQAOAGgSi6tTKnozVOuwQhC0cBCEIA4kq1ZrWlziAAJJKVUDvl/8AyVLx7v8A3aOCzTwmzqWXgZ7T3wpMafZgvPCfCB1M3N+ELLalTMT9NOGg4L3j8RHHp3TNr5uOqlbqtsrmVGkStN7qgY0n3Qb9BEAegS2Ir5GmTI+/VRFLGFhB4/f7J3gMLWxtUMY3zizRxc7t8Uv/ACbpfRvzSR3d3YNXF1CGiG/qeQYaPq48ltGzMAyhTbTYAGtEdzxJ6k3RsvZ7KFNtJghrR6niT1JT5WzOCOq8gQhC2YOKJ2jtunSkEOcRqGiYPInQG+mqk6kwY1WKYzEPdUOd5ytExOpPiJPcpfJTlaN8cqnsdbcxDatd9RjMgf7wmZI/VyExpz7lQbmAlOcTtYRHDp+6jnYnNI+qnlU9sp0kWDZuIaXZDYmITDamFL8Q2iwZnF2UAdf4Uax5FyDPArRPw/3aeHDFV2kGP6bTrexeRwtYdyeS1MfLJm70X/C0cjGtmcrQ2ecAD6JdcAXVUSghCEACEIQAIQhAAhCEAcVR38xLhTYwe64yTzLSCB639FblRPxCqkOZANmOvwv9j1S+X9Wb4/2Rmu05zrRcFuTh6+DolpyVCxpLxNybkObIniOBWaYl/mtd/DfH+0wgaXAupuLY4hurfLX0S+NZWGN5W1tEfg/w4ph01Kpe3gGtymepJdbsrjs7Z1OgzJSaGt6cTzJ4lPUJylIQ6b7OoQhaOAhCEAcWLb44I0q9QEZQ5xI6tMlpEcLwtpVJ/EbBNdTY+BmDiyehaXfAt+JWLWsjON4ZkLplbLu/sDBV8PRq/l2SWidYLh4XEwYNwdVj1emQVZNy96XYV4Y6XUXHxN/t/wCTJsDzHFZlo1aZsjMGwBoDGgN90ZR4f8eScQuNdK9JokEIQgAQhCABCEIAEIQgAQhCAOLPPxArgvy6ZWwOsw79loSzLfdji8vc2xMA8IFh8AlcrWMDeL9jO8Qy6uv4T1nDEvZPhdTJI6tc3L6An1VOxGpU3uLUe3G0S2PE4tINhlLTP32WZZullM3NdXAup5OCEIQAIQhAHFVt/cFUqYcGm0uLHFxaNSMpFgNdValwrjWVg6nh5PnHEPDj1SAVn3lwJdjKzKdMAZnAACANCTyAMz5qCfgXN94gfFI8kngoab2aN+G28L6hdh6js2VuZhOsCAWk8QLEStGWFbu4sYXEMqiXZbOHNrrED5+QW4UKrXtDmmQQCDzBuCmxWUJtYYqhCFswCEIQAIQhAAhCEACEIQA3xRIY4jWFVt7GA0QDCt6qe9LfARyP7KX8jpMdw94MuqYWauXuYPafkne7zizE08tiHAj4/PTzSmGvimd3f9Su4Zv9dvQyleT0UNLDNuC6vFPQdl7V5CCEIQAIQhAAhCEAU3bOFa2s8hobmAJI1JMySTx1+Cpm3cAJlgt9wtdxOHa4Q5oPdQmP2VROrPi791DycTV5TKuPk1gyTIXsaeIkE9QYutf3Pz/lWB4IIkCeLdQfj8E42fsWgwh7aTc8amSfiVKhUcaxsVyVnR6QhCcKBCEIAEIQgAQhCABCEIA//9k=',
            titulo: 'Minotauro'
          },
          {
            url: 'https://blogs.sap.com/wp-content/uploads/2015/05/263872_centaur_699727.jpg',
            titulo: 'Centauro'
          },
          {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWE4Kf7u1qcZ4xpx3MvWp3_b1Qarlo4TNOA&usqp=CAU',
            titulo: 'Quimera'
          },
          {
            url: 'https://www.mythical-creatures.com/wp-content/uploads/2021/06/kraken1.jpg',
            titulo: 'Kraken'
          },
          {
            url: 'https://mitologiahelenica.files.wordpress.com/2015/06/medusa-15.jpg',
            titulo: 'Medusa'
          },
          {
            url: 'https://m.media-amazon.com/images/I/31rExyUfAuL._AC_.jpg',
            titulo: 'Cerberus'
          },
          {
            url: 'https://st2.depositphotos.com/2942953/10260/v/600/depositphotos_102604906-stock-illustration-hydra-mythological-creature.jpg',
            titulo: 'Hydra'
          }
        ]
      }
    },
    computed: {
      filterPics() {
        if (this.filtro) {
          let regex = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => regex.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
    },
    components: {
      Card
    }
  }
</script>

<style>
</style>