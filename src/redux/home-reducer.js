import userPhoto from '../images/user.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    profileInfo: {
        userPhoto: userPhoto,
        userName: 'Pavlo Yurchyshyn',
        userPosition: 'Trainee-junior React.js developer',
        userConections: 50,
    },
    users: [
        {
            id: 1,
            photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgVEhIYGRgYGBgYGBgYGBIYGBgSGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISGjEhISExNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0MTQ0MTQ0NDE0MTQ0NDQ0NDQ0NDQ/NDQ0MTQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgAGAwUHBAj/xAA+EAACAQIEAwUEBwcEAwEAAAAAAQIDEQQFEiExQVEGImFxgTKRobEHExRCgsHwIzNScrLR4WKSovEkNdIW/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQEAAwEAAwAAAAAAAAAAARECITFBEgNRYf/aAAwDAQACEQMRAD8A3yGQEMkRoyGQEMioKGQEMgIhkKh0AUMKMgCgoiCgCgoAUUMMhEx0EEKAggQZAGAhCBAgSBQEIQNgIFAQUACEIBXUMhUOjLRkMhUEqGQyAgoAoZCoZAMgoCDcAuVjUYntJhqc9DcnLmoqLt577epqO3Ga1KNPRTlpc3Zy56fDpwObwxUI7yUpu+ybtFW5u6dyWrI6zDPpVFenB25bqV/Jxun7zU5lmTV1OtPVyUHBtei/Mobzqs5bzaXTVa/rv+uRsMDjm33pzab9iN7O/Bd1Ru/FmbaskbaGbVOEp17de/H3NSsZqWdYim7061S3OM/2i9G7pfAkaSdn9nitttbcqm/C0Wm/1xMWJm6S/aTjB8Un3pJcePGPoTWsbzDdr6kF+1ipcL2g4+t02rehZcrzqhiF+zmm+ceaOWRxcZt2lPhfa8k/wyaS4HpjOmkpxlGE1we+q/U1OqzeY64hjnmRdsKkZqNeSnBtLV3Yyj47R38ti/4atGpFSi00+DRqXWbMZQoAUVECQgBIREAg1gBQEsEJAK0h0Ih0RTIKAgoB0RAQUAyCgIYAo1+b5rTw0NU35R5v0GzXMYYem5y4/dXV9Dmma5jVxFTXN247LlHmk+hLcJNeLtDmFSvUc22ot3jGS2Su9kjSfVRveUm/Dur/AKNvWw7nayfm/wDJ4sRlc0r6WY1v8nwqw8Jb05NbbfW018bXsWPB5jhlaMJOn1UZvVvxvOMHJ+jKZKko+3fySfxdxoy2tFP/AIq3pexR0bDY2hbTRVr7uS9pvqpSfHxYMTg6Kjqnoh1k5qU3fnqts/LbxKRhYzk93UXipQ3+BYcvy2m2nVjWfg3B+r71yeF8sc8Ip92i9r3u1Ubfjd8fO5inl8KaadVSl0t/ksajQs4qcIL+FtQfrqu/iaXNYadqaTT5xalf8W9wNVGEU7KW724v4Fp7F53LDVPqqu9Ob2lfaEntfye1/eVJ4KrfW5QXOznaT9LD0arTtJ/rwaZZcZrvITQdks3jiqCs+9C0JbpttLZ8TfnRgQgQUBAoAQhggCBCEIFVtDIRDoimQyFQUAyCgBQDILYEaztDilTw897SktMVxbk+iAp/abMvrquzvGG0bLfo2urZgw2W1Kkt1aO3r09TBQpx1xXHntzb538vyLpg6EVGKSsjla68xgwfZ9JJvjzNl/8Anac1ZxNxh4bI2OHgjONuf5h2Lpu7sU7NezUqfsx2+fS53eVBPka/HZRCaacRJTx9fPsqc6b2jvx53suL2NhgM5r03za6OeIj8YsvubdlrS1Qjw4W5Mr88kqRfdTXkhafk8MRTxKUZU8Tdpfu8RUmr8/bu7ErZfRpR2pzh1c4yv4XepXfoJWwOLjHuzmvJyRpKsa8XpqTn5vv/wBVxqfnGfGUaMrr6yS6Nq+/n/lmuhRUXdSvvtsjbU8tVSO84uS5p003Hk9LtKz6q6NXi6E6bcbXXr/3c1KzYuP0e41QxGj+NOL3fFLUtvT4nTkcP7OV5U6kJptWlG11vfUlY7hE6cudFBIRGmRIAIQUMAIEIQhVVpDIRDIyp0FCXGQDoZGMdAMil9ssa3VhBP2Vf1l19Ey53OR5/mOutUlHnKS8bcPkTpY9uSpVKup79C+4SPA572Yffv8AryOh5e72OVdeVgw0Nj20keTDvY9tNkbeiCMriYomVM1EseerhlLl8jyyyuD5fA2cR7FTcahZTC3D4GjzrstTqR7q34lzEnElhOnFcx7LVad9Kut/77FbxOX1ota4+Cv05K59CYjBxlyNFmmUU3BvSrrdbdDMmLbrk/Z3LqlarCFrXklxTslu3ZeTO0QjZJdEc77NQVPGSa23TUV/DK6a8k7/AAOjI68enDr2KCgIKNsIhhQoAhAECEIQqqymFMRDJmVMmMjHcZMDImFMS4UwBXk9EtPHS7edtjimLXed+Op38ztdRNxaXGzt522OKUoOo432u16b2ZnpeVoyPD6aafN/mXnKo8CpYRqKS6G/y3M4rZL4/M5u8W6keuJoVmFld7XPHiO1EKbs02uqGyL5XKEzLGZUMJ2po1PvpPxNrSzGMuEk/UbFxv0xlJGrp4m5kWJXUus/l72wNnkVddUPHERfMqYzTZrsf7EvJnulNM8WJjdNdUZxXO8merEqSW8Z6ffZ/kdARRezGHl9qndK0Zyv5xul8WXlHTj04dezBQoUbZFBQAoIJCECiQhCiqoZMxphuZVkTCmY7jJgPcZMRMiYGTWlu+C3fkcppxi6q0rZN/I6XmMv2NS38E/6Wc1wytXlF8k2vel+Zjp04nitq3JbK+4ac5w3a+JZssy6FSCbXI9k+z9N9fec7XWKbDPq2rRTpOT8b8PTl6nllnOLqPTOmldXjpp6k3zU5ufc252fkXOlksqMnOnu3xTsbKjd7zpJvq4Rb99i859Op1fVc9q4OtCUdULOUVJLg7NX8n8PI2mR1qn1iTbLhicBGs4yqU2pQalCcdnFr5p9DFHL4faE4xS3u7cLvdmepPjUrf4Gk9F2jR59i5033XuXHDwShY0ma5ZGopt21W7rd7J9WTqJL5c/q5xU1b1XH0bS+DRtMqzSd1/5EJb8Hs2NiezGHqwcJz3tJXtd2l04cLcV47GGPY2nG7+0zm2kk5Xb2t7WqT1bJK3Q1zz43Trq7mLZTzBuP9rM9NDEOfHkVHAZdVozs23B8rNpeV+C9beXO2YSFlwshKljV5FhNFStN86k0v8Ac2/yN4jwZdBr6zxqTa8r2/I96O3Hp5+vYoKAQ2wIwowBIAJFQhCFFQuG4lw3MKdMNzHcbUUZFINzFqCpANXhrhKL+9Fx96aOeTjacfJr89/cdDUio53k9SFX6ynHVBtykk1eDd9Tt/Dxe3Az1GuOsWnszUvTSZZ4Ri0Ufs7XSSRb8PPmcq9EmvbGjHoPGhHoSlIyyZYtjxYppLZGsw37y56M3r6I7bt8EY8nvJKUtmzP0zwsuH9k88o3bM9NNIxVJWZevTMYJ5bCW9hFlsUbCD2Gch7PLzwoJbGPE7I9bkeHFTXPruJGawpJcP0+fxYSSd3sRHokyOPV26KGQqCisihhUQiGCAhVEhCAUu5NRjuDUYVluHUYdRNQGbUNqMGsmso9CkY8XL9nP+SX9LFUxMQ705rrGXyYFcyfFWdr+BfMBiU0vI5hhm73RZsqx0n6HCvTzV+p111DPElep4yVuDMs8RK3D3k1t5q+bwliZwnJK0Ul68/10GwOe06dRU5SW/B32KvnuTyqVHOLaduV1dFaeSVIT1Qumt79fMSFx36hjY6eXAxrExqPY51lcsZUp6NWl2snxa+B6MhyHFQq3liKjhe8rzm7+V3Ze4ttqTmf2vtOtpdrnpjO5q6seFnwMtOo7WZJR7ZyPDVldmSdU80JXuzfPmuXd8MiChUMdnAyChUFAMiICIEOQUYCEIQKomoGox6gORlWTUTUYtRNQGXURSMWomoDMpDpnnUhlICs5fFKo4v7smvc7Fjy2glOSXXgV/M4fVYnV92a1fi4SXyfqb7La95p35Lfr1OXUduKtkcK3T7q3NBis2dGTVWlUSvtJR1p/wCy9vUsuHxK0WNdmdPV3o+pmOs/1qqXaTBy43X8yS+ZscLicHU9rbx2t8Dw4Sppnpkl/LK2/lfZm8hl2FqRu6EPSEE+XNbmo65zjPR+zU3tUj5Kz2PXTrUpexOPvNXXynC27tOTa5aqll8TDQ7P0ZO7jLy11P8A6CXnnN1tMZwuuMenTmPKV0mCOV04K8I6Xzs3v59RZrYzfbkEZjQ4HnnL7q4s9ETtxPrh3TpjIxpjI6OR0FMUNwpkw3FCAQoAUwhiCEA57cDkI2Bsw0OoOoxtg1AZdQVI81XEQgrznGK/1NL5mmx3aqhT2heo/wDTZR/3Pj6AWNSMONzCnRg51JqKXvfglxbKLmnaurVio006a5tSvJ+F7KyNLhrzqx1tyvJXbbbfqwLfmGdfaYbUXGMWpQnKXeb4bQS4NePQ92R5itrvdGjxMuR46daUJXRyt/TtJjr+GxOqCaZ7qa1I5/kWcp2g/wBf4L1gMQtjONSs88ujPir/ADEp4CcHsnb19DbUJxZ64VYjG5Wvw+Fl95s90IKK2PSpJmGcki4mknM12JrKO7eyBmGOhTjdtFZxWf0adSm8TJxhOTUL+ypRt359I7ryvuJztxz66xY8NFvvy4vgukfHxPSmYYTTSaaafBp3TXgzIeiTHG3ayIKYiYyZUMmMhExkEMG4oQpkG4iGQBIAhBzDE4+lT9upGPg2r+7iafEdqqEfYjOfktK+P9ijv9cyXGCyYjtdUf7unGPjJuT/ACNLLMarlKeuSlJ3bTa9NuR5WSxcEnOUneTbfVu797BYKJYYEY1GemcZdJJ+5kaEaJRacTG8jyVaZsMDH6ynCXWKv5rZ/INbDnn9O8ainNwd07MuOT9oNlGT3Viq1aIIwa4F1cdawOeU5WvJJ/rkejEZxGO6krHJqdeatuzP9oqPa7+JFdWw+f07bzXvMWO7RU4r2lfkub/VzmdGjUm+LRYMry7e7V/Mbg2dN1K89dT2b3jHkul+pS/pFr6sRCC+5C/rOX9oo6RRpKKOSdrq2vG1nf2ZKC/DFJ/G5rjz0x36Lk2fYnByTo1GlzhK8oPzg+HmrM6FgfpIw0or66nUhK3e0qM43523u16HKeRIo9Dg75lGf4XFfuK0ZO13B3jJLq4yszapnzhRrShJShJxlF3UotxcX1TW5bsq+kHG00lUca0VymtMmv54/mmTFdjTCmU3KvpCwdWyqqdGX+taof748PVItuGxNOpFSpzjOL4OLUl70B6CChuEENwEuFNcgpAPmMIZINgECg2IUBrcawahEBjkhZIy2EtsSi19kpfWUpQ5wl/xluvjqNvUwpWuxuKVPFRhJ92otH43vD47fiOjzwB5+5nTvxdio1MF4CRwfgWmeA8DC8E1yObcaSGBT5Hto5fHobOnhuqPZSoLoFeHDYBdDd4PC2XAy4bCt8jaU8N4bFZtaXPcfDCYadaX3VaEf4pvaMff8EziM5ylqnJ3lJuTfVt3b97ZavpAzz7Vifqqb/Z0W0rcJVOE5ensr16lW5Ho/j5ya4dXaHIeK2BHgG50YJNWBTZJu4aS2YEU31+Rmw2Nq03enUnF9YycfkYn1Fpq7AtWS9rMXQqRnKrOcb96E5ykpQ52vwfRnXcozihi6anRqKXWP3ovpKPFHAb7Hpy7H1KNRTpzcJrhKLt6PqvBiwfQgUVjsl2qhjI6Klo1oq7jyml96H5rkWa5AxBbkCvmrTy6fIAaUrpP0f5GWaTRRhaJYZPkRACS2BFDtAiESwiW7MthH7XoFSKaaabTW6a2aa3TT6nb+zWNjjMLCrtqtpmlyqx2ltyT2kvCSOJlu+jzPlhMT9XVlalXcYyb4QqcIT8Fvpb6NP7pjvnY1x1ldQlgl0MUsD4G++rFdI8+O7Q/YPA9NDBJG1VJGSNOww1goYZIr30gZ2sFhHGDtVq3hDrFffn6J+9otFevClTlOpJRhCLlKT2Sildt+hwPtZnssdip1ndQXcpxf3aaeza5Slxfu5HTnnax11kaK1iONkFK7JUO7gEFsKZILYWaAxpD0eDClsClzARPu/AbDrfyTFhxkvUy0FZNgOuhhovvmeJ58P7TYGzw2JnTnGdOTjKLUoyXFNcztHZfPI4ygp7Kce7Uj0n1Xg+K/wAHEIM3/ZHOvsmJjJvuT7lTppb2l+F7+VxZo7Tchj+uh/HH3ohFfNlD73mvmZ3+ZCFGOftDRIQn0F8RUQhQyFnxRCCoZhn7L/lfyIQVY+lsJ+7h/JD+lGSQSHnr0AhmQhlVY+kb/wBZW/B/XA4XIhDt/G49pDiCZCHRzOuBjmQhQz4C0yEIEj7bM/IhBBI8DBhuMiEA9MB48SEKLeQhAP/Z',
            name: 'Clement Mihailescu',
            status: 'Co-Founder & CEO, AlgoExpert | Ex-Google & Ex-Facebook',
            followingStatus: false,
        },
        {
            id: 2,
            photo: 'data:image/png;base64,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',
            name: 'GlobalLogic',
            status: 'Company • Computer Software',
            followingStatus: false,
        },
        {
            id: 3,
            photo: 'https://media-exp1.licdn.com/dms/image/C560BAQH7G4ppO5H97A/company-logo_200_200/0/1557483616368?e=2159024400&v=beta&t=ue5J5IOXiVSwhGXTrfXH9Ucn1hXX2F0zaLDK3Yxk0Wo',
            name: 'EPAM Systems',
            status: 'Company • Information Technology and Services',
            followingStatus: false,
        }
    ]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followingStatus: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followingStatus: false }
                    }
                    return u
                })
            }
        }
        default: {
            return state
        }
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export default homeReducer