import { Inter } from 'next/font/google'
import { MouseEventHandler, useState } from 'react'
import { useRouter } from 'next/router';
import AttributeDropDown from '@/components/input/AttributeDropDown';
import ItemDropDown from '@/components/input/ItemDropDown';
import SearchButton from '@/components/input/SearchButton';
import { validateAttribute } from '@/constants/SBAttributes';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [itemName, setItemName] = useState("");
  const [attr1, setAttr1] = useState("");
  const [attr2, setAttr2] = useState("");

  const router = useRouter();

  const handleSearchButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    const url = `/kuudra/${itemName}?attr1=${validateAttribute(attr1)}&attr2=${validateAttribute(attr2)}`;
    router.push(url);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ItemDropDown style={{width: "20%", isDisabled: false}} itemName={itemName} setItemName={setItemName} />
      <AttributeDropDown style={{ width: "20%", isDisabled: itemName === "" ? true : false }} attribute={attr1} setAttribute={setAttr1} />
      <AttributeDropDown style={{ width: "20%", isDisabled: attr1 === "" ? true : false }} attribute={attr2} setAttribute={setAttr2} />
      <SearchButton isDisabled={itemName === "" ? true : false}  onClick={handleSearchButtonClick as unknown as MouseEventHandler<HTMLButtonElement>} />
    </main>
  )
}
