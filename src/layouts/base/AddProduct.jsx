import React from 'react'

export default function AddProduct() {
    return (
        <div className="kapsar">
            <div className="ortala">
                <form method="POST">
                    <label for="name">Ürün Adı</label><br/>
                    <input type="text" id="name" name="name"/><br/>
                    <label for="slug">Ürün Etiketi</label><br/>
                    <input type="text" id="slug" name="slug"/><br/>
                    <label for="description">Açıklama</label><br/>
                    <input type="text" id="description" name="description"/><br/>
                    <label for="price">Fiyat</label><br/>
                    <input type="number" id="price" name="price"/><br/><br/>
                    <input hidden type="text" id="id" name="id"/>
                    <input type="text" hidden name="token" value="1|gXVLnS66puPolvgR4DvBZvrZwGAwoDmbaRtXq930"/>
                    <input type="submit" value="Ekle"/>
                </form>
            </div>
        </div>
    )
}
