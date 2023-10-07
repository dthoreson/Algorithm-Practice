# REVERSE WORDS - NO MATTER HOW MANY SPACES BETWEEN WORDS, RETURN SENTENCE PROPERLY SPACED WITH THE ORDER REVERSED


class Solution:
    def reverseWords(self, s: str) -> str:
        
        right = len(s)-1
        left = right - 1 
        NewSent = []

#NEEDS TO WORK THROUGH ENTIRE STRING INCLUDING FIRST WORD
        while right >= 0:
            if s[right] == " ":
                right -= 1
                #IF WE CHANGE RIGHT WHEN WE ENCOUNTER A SPACE THEN WE NOW MUST CHANGE LEFT AS WELL
                left = right
            elif s[left] != " ":
                left -= 1
            elif s[left] == " ":
                #THIS IS WHERE WE SLICE THE STRING (GRAB THE WORD) AND APPEND IT TO THE NEWSENT VARIABLE THAT WE NEED TO RETURN AT THE END
                NewSent.append( s[ left+1 : right+1 ] )
                right = left
        return " ".join(NewSent)


s = Solution()
print(s.reverseWords("  Something    went wrong"))
print(s.reverseWords("  Another Test    to      try Out    LOL"))