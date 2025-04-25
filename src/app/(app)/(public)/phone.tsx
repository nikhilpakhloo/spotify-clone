import React, { useState, useRef } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import BackButton from '@/src/components/BackButton';
import { getAuth } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';
import Button from '@/src/components/Button';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';
import type { CountryCode, Country } from 'react-native-country-picker-modal';



export default function Phone() {
  const auth = getAuth(getApp());
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmation, setConfirmation] = useState<any>(null);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [country, setCountry] = useState<any>({ "callingCode": ["91"], "cca2": "IN", "currency": ["INR"], "flag": "flag-in", "name": "India", "region": "Asia", "subregion": "Southern Asia" });

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCountrySelect = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.cca2);
  };

  const handleSendOtp = async () => {
    setLoading(true);

    const selectedCountryCode = country?.callingCode[0] || '1';
    const fullPhoneNumber = `+${selectedCountryCode}${phoneNumber}`;

    try {
      const result = await auth.signInWithPhoneNumber(fullPhoneNumber);
      setConfirmation(result);
    } catch (error: any) {
      console.log("Error sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const code = otp.join('');
    try {
      if (confirmation) {
        await confirmation.confirm(code);
      }
    } catch (error: any) {
      console.log('Error verifying OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) inputRefs.current[index + 1]?.focus();
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-1 bg-primary px-4 pt-14">
      <View className="absolute top-14 left-5 z-10">
        <BackButton />
      </View>

      {!confirmation ? (
        <View className="mt-32">
          <Text className="text-white text-2xl font-semibold mb-4">Enter your phone number</Text>
          <View className="justify-center flex-row gap-1">
            <CountryPicker
              withFlag
              withCountryNameButton={false}
              withCallingCode
              countryCode={countryCode}
              onSelect={handleCountrySelect}
              withAlphaFilter
              theme={DARK_THEME}
              containerButtonStyle={{ width: 50, borderRadius: 8, padding: 8 }}

            />
            <TextInput
              placeholder=""
              value={phoneNumber}
              placeholderTextColor="#ccc"
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              className="bg-white/10 text-white px-4 py-3 rounded-xl border border-white/20 mb-4 w-[85%] self-end"
            />
          </View>
          <Button
            text={loading ? <ActivityIndicator color="white" /> : 'Send OTP'}
            className="bg-primaryButton p-3 w-[40%] rounded-full self-center"
            onPress={handleSendOtp}
            disabled={loading || !phoneNumber.trim()}
          />
        </View>
      ) : (
        <View className="mt-32">
          <Text className="text-white text-xl mb-4">Enter OTP</Text>
          <View className="flex-row justify-between w-full mb-4">
            {otp.map((digit, idx) => (
              <TextInput
                key={idx}
                ref={(ref) => (inputRefs.current[idx] = ref)}
                value={digit}
                placeholderTextColor="#ccc"
                onChangeText={(text) => handleChange(text, idx)}
                keyboardType="number-pad"
                maxLength={1}
                textContentType={idx === 0 ? 'oneTimeCode' : 'none'}
                className="bg-white/10 w-12 h-14 text-white px-4 py-3 rounded-xl border border-white/20"
              />
            ))}
          </View>
          <Button
            text={loading ? <ActivityIndicator color="white" /> : 'Verify'}
            className="bg-primaryButton p-3 w-[40%] rounded-full self-center"
            onPress={handleVerifyOtp}
            disabled={loading || otp.some(digit => digit === '')}
          />
        </View>
      )}
    </View>
  );
}
