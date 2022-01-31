import './certificationHeading.scss'

export function CertificationHeading({data, certificationLi, setCertificationLi}) {
    return (
            <li className = {data.id == certificationLi ? 'certificationHeading active' : 'certificationHeading'} onClick={() => {setCertificationLi(data.id)}}>{data.name}</li>
    )
}
