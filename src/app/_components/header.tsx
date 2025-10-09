export function Header() {
    return (
        <section className="pt-5 pb-5 flex justify-between">
            <h1 className="font-great-vibes text-3xl text-[#5CADFF]">J + G</h1>
            <div>
                <ul className="flex space-x-4 text-white font-poppins ">
                    <li><a className="rounded-md hover:bg-[#272828] hover:text-[#5CADFF] transition-all duration-500 ease-in-out p-2" href="https://maps.app.goo.gl/BhDNEaK6rfaTuaod9">LOCAL</a></li>
                    <li><a className="rounded-md hover:bg-[#272828] hover:text-[#5CADFF] transition-all duration-500 ease-in-out p-2" href="https://wa.me/5585992081366?text=Ol%C3%A1%21%20Vim%20do%20site%20do%20convite%20de%20casamento%2C%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%21">CONTATO</a></li>
                </ul>
            </div>
        </section>
    )
}